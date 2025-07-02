const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MercadoPagoConfig, Preference, Payment } = require('mercadopago');

const app = express();

// Configurar Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
  options: {
    timeout: 5000,
    idempotencyKey: 'abc'
  }
});

const preference = new Preference(client);
const payment = new Payment(client);

// Middlewares
app.use(cors({
  origin: [
    'https://ubytech.com.br',
    'http://localhost:5173'
  ],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend Ubytech funcionando no Vercel!',
    domain: 'ubytech.com.br',
    hasAccessToken: !!process.env.MERCADOPAGO_ACCESS_TOKEN,
    hasPublicKey: !!process.env.MERCADOPAGO_PUBLIC_KEY,
    timestamp: new Date().toISOString()
  });
});

// Rota para criar preferência de pagamento
app.post('/api/mercadopago/create-preference', async (req, res) => {
  try {
    const { modelo, cliente, metodoPagamento } = req.body;
    
    console.log('[MercadoPago] Criando preferência:', {
      modelo: modelo.nome,
      cliente: cliente.nome,
      metodo: metodoPagamento
    });

    if (!modelo || !cliente) {
      return res.status(400).json({
        success: false,
        error: 'Dados obrigatórios não fornecidos'
      });
    }

    const precoFinal = metodoPagamento === 'pix' 
      ? modelo.preco * 0.95 
      : modelo.preco;

    const reference = `UBYTECH_${Date.now()}_${modelo.id}`;

    let paymentMethods = {
      excluded_payment_methods: [],
      excluded_payment_types: [],
      installments: 12
    };

    if (metodoPagamento === 'pix') {
      paymentMethods.excluded_payment_types = [
        { id: 'credit_card' },
        { id: 'debit_card' },
        { id: 'ticket' }
      ];
    } else if (metodoPagamento === 'credito') {
      paymentMethods.excluded_payment_types = [
        { id: 'bank_transfer' },
        { id: 'ticket' }
      ];
      paymentMethods.excluded_payment_methods = [
        { id: 'account_money' }
      ];
    } else if (metodoPagamento === 'debito') {
      paymentMethods.excluded_payment_types = [
        { id: 'credit_card' },
        { id: 'bank_transfer' },
        { id: 'ticket' }
      ];
    }

    const preferenceData = {
      items: [
        {
          id: modelo.id.toString(),
          title: `Site ${modelo.nome} - Ubytech`,
          description: modelo.descricao,
          picture_url: modelo.imagem,
          category_id: 'services',
          quantity: 1,
          currency_id: 'BRL',
          unit_price: precoFinal
        }
      ],
      payer: {
        name: cliente.nome,
        email: cliente.email,
        phone: {
          area_code: cliente.telefone.replace(/\D/g, '').substring(0, 2),
          number: cliente.telefone.replace(/\D/g, '').substring(2)
        },
        identification: {
          type: 'CPF',
          number: cliente.cpf.replace(/\D/g, '')
        }
      },
      payment_methods: paymentMethods,
      back_urls: {
        success: 'https://ubytech.com.br/pagamento/sucesso',
        failure: 'https://ubytech.com.br/pagamento/falha',
        pending: 'https://ubytech.com.br/pagamento/pendente'
      },
      auto_return: 'approved',
      external_reference: reference,
      notification_url: 'https://ubytech.com.br/api/mercadopago/webhook',
      statement_descriptor: 'UBYTECH',
      metadata: {
        cliente_nome: cliente.nome,
        cliente_cpf: cliente.cpf,
        cliente_telefone: cliente.telefone,
        modelo_id: modelo.id.toString(),
        modelo_nome: modelo.nome,
        metodo_pagamento: metodoPagamento
      }
    };

    const response = await preference.create({ body: preferenceData });

    res.json({
      success: true,
      preferenceId: response.id,
      initPoint: response.init_point,
      sandboxInitPoint: response.sandbox_init_point,
      reference: reference
    });

  } catch (error) {
    console.error('[MercadoPago] Erro ao criar preferência:', error);
    
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao processar pagamento no Mercado Pago',
      details: error.message
    });
  }
});

// Webhook para notificações do Mercado Pago
app.post('/api/mercadopago/webhook', async (req, res) => {
  try {
    const { type, data } = req.body;
    
    console.log('[MercadoPago] Webhook recebido:', { type, data });

    if (type === 'payment') {
      const paymentInfo = await payment.get({ id: data.id });
      
      console.log('[MercadoPago] Detalhes do pagamento:', {
        id: paymentInfo.id,
        status: paymentInfo.status,
        external_reference: paymentInfo.external_reference
      });
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('[MercadoPago] Erro no webhook:', error);
    res.status(500).send('Erro');
  }
});

// Rota para consultar pagamento
app.get('/api/mercadopago/payment/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;
    const paymentInfo = await payment.get({ id: paymentId });

    res.json({
      success: true,
      payment: {
        id: paymentInfo.id,
        status: paymentInfo.status,
        status_detail: paymentInfo.status_detail,
        external_reference: paymentInfo.external_reference,
        transaction_amount: paymentInfo.transaction_amount,
        payment_method_id: paymentInfo.payment_method_id,
        date_created: paymentInfo.date_created,
        date_approved: paymentInfo.date_approved
      }
    });
  } catch (error) {
    console.error('[MercadoPago] Erro ao consultar pagamento:', error);
    res.status(500).json({
      success: false,
      error: 'Erro ao consultar pagamento'
    });
  }
});

// Rota para verificar configuração
app.get('/api/mercadopago/config', (req, res) => {
  res.json({
    hasAccessToken: !!process.env.MERCADOPAGO_ACCESS_TOKEN,
    hasPublicKey: !!process.env.MERCADOPAGO_PUBLIC_KEY,
    publicKey: process.env.MERCADOPAGO_PUBLIC_KEY,
    domain: 'ubytech.com.br'
  });
});

module.exports = app;