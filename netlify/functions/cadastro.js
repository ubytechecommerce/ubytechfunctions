const nodemailer = require('nodemailer');

// Função handler para Netlify Functions
exports.handler = async function(event, context) {
  console.log('--- INÍCIO FUNCTION /cadastro ---');
  console.log('Método HTTP:', event.httpMethod);
  // Log das variáveis de ambiente (não logar senha, só presença)
  console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'OK' : 'FALTA');
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'OK' : 'FALTA');
  console.log('EMAIL_TO:', process.env.EMAIL_TO ? 'OK' : 'FALTA');

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método não permitido' })
    };
  }

  // Parse do body
  let data;
  try {
    data = JSON.parse(event.body);
    console.log('Body recebido:', data);
  } catch (err) {
    console.error('Body inválido:', err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Body inválido', details: err.message })
    };
  }

  // Dados do formulário
  const { nome, email, mensagem } = data;
  if (!nome || !email || !mensagem) {
    console.error('Campos obrigatórios faltando:', { nome, email, mensagem });
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Campos obrigatórios faltando' })
    };
  }

  // Configuração do Nodemailer
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    console.log('Transporter criado com sucesso');
  } catch (err) {
    console.error('Erro ao configurar e-mail:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao configurar e-mail', details: err.message })
    };
  }

  // Monta o e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `Novo cadastro de ${nome}`,
    text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`
  };

  // Envia o e-mail
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso:', info);
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao enviar e-mail', details: err.message, stack: err.stack })
    };
  }

  // Log simples (Netlify Functions loga no painel)
  console.log(`[CADASTRO] Nome: ${nome}, Email: ${email}`);
  console.log('--- FIM FUNCTION /cadastro ---');

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: 'Cadastro enviado com sucesso!' })
  };
};
