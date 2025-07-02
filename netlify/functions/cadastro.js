const nodemailer = require('nodemailer');

// Função handler para Netlify Functions
exports.handler = async function(event, context) {
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
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Body inválido' })
    };
  }

  // Dados do formulário
  const { nome, email, mensagem } = data;
  if (!nome || !email || !mensagem) {
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
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao configurar e-mail' })
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
    await transporter.sendMail(mailOptions);
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao enviar e-mail', details: err.message })
    };
  }

  // Log simples (Netlify Functions loga no painel)
  console.log(`[CADASTRO] Nome: ${nome}, Email: ${email}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: 'Cadastro enviado com sucesso!' })
  };
};
