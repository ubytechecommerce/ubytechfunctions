const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Função de log
function logToFile(message) {
  const logMsg = `[${new Date().toISOString()}] ${message}\n`;
  // Garante que o arquivo será criado se não existir
  fs.appendFile('server.log', logMsg, (err) => {
    if (err) {
      console.error('Erro ao escrever no server.log:', err);
    }
  });
}

// Middleware de log de acesso
app.use((req, res, next) => {
  logToFile(`Acesso: ${req.method} ${req.originalUrl} IP: ${req.ip}`);
  next();
});

// Middlewares
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'https://ubytech.com.br',
    'http://localhost:5173',
    'https://ubytech.com.br'
  ],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint de cadastro
app.post('/api/cadastro', async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    if (!nome || !email) {
      logToFile('Cadastro inválido recebido.');
      return res.status(400).json({ success: false, error: 'Nome e e-mail são obrigatórios.' });
    }
    // Logar cadastro
    logToFile(`Novo cadastro: nome=${nome}, email=${email}, telefone=${telefone || ''}`);

    // Log variáveis de ambiente (não logue senhas em produção!)
    logToFile(`CONTACT_EMAIL: ${process.env.CONTACT_EMAIL ? 'set' : 'not set'}`);
    logToFile(`CONTACT_EMAIL_PASS: ${process.env.CONTACT_EMAIL_PASS ? 'set' : 'not set'}`);

    // Enviar e-mail
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_EMAIL, // Seu e-mail
        pass: process.env.CONTACT_EMAIL_PASS // Senha de app gerada pelo Google
      }
    });

    // Testar conexão com o transporter
    await transporter.verify();
    logToFile('Transporter verificado com sucesso.');

    const mailResult = await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL, // Recebe no mesmo e-mail
      subject: 'Novo cadastro no site Ubytech',
      text: `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone || ''}`
    });
    logToFile(`Resultado do envio de e-mail: ${JSON.stringify(mailResult)}`);

    res.json({ success: true, message: 'Cadastro recebido com sucesso!' });
  } catch (error) {
    logToFile(`Erro no cadastro: ${error.stack}`);
    // Adicione log detalhado do erro do Nodemailer
    if (error.response) {
      logToFile(`Nodemailer response: ${error.response}`);
    }
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao processar cadastro.',
      details: error.message // Retorna mensagem de erro para facilitar debug no frontend
    });
  }
});

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend Ubytech funcionando!',
    domain: 'ubytech.com.br',
    timestamp: new Date().toISOString()
  });
});

// Servir arquivos estáticos em produção
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Log de erro global
app.use((err, req, res, next) => {
  logToFile(`Erro global: ${err.message}`);
  res.status(500).json({ success: false, error: 'Erro interno do servidor.' });
});

app.listen(PORT, () => {
  logToFile(`Servidor iniciado na porta ${PORT}`);
  console.log(`🚀 Servidor Ubytech rodando na porta ${PORT}`);
  console.log(`🌐 Domínio: ubytech.com.br`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`);
});