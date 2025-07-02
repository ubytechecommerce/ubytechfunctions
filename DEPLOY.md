# 🚀 Guia de Deploy - Ubytech

## Opções de Hospedagem

### 1. **Vercel + Railway (Recomendado)**
- **Frontend**: Vercel (gratuito)
- **Backend**: Railway (gratuito até $5/mês)

### 2. **Netlify + Heroku**
- **Frontend**: Netlify (gratuito)
- **Backend**: Heroku (pago)

### 3. **Servidor VPS (DigitalOcean, AWS, etc.)**
- **Completo**: Frontend + Backend no mesmo servidor

---

## 🎯 Deploy Rápido (Vercel + Railway)

### Frontend (Vercel)

1. **Conecte seu repositório no Vercel:**
   ```bash
   # 1. Faça push do código para GitHub
   git init
   git add .
   git commit -m "Deploy Ubytech"
   git push origin main
   
   # 2. Vá para vercel.com e conecte o repositório
   ```

2. **Configurações no Vercel:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Variáveis de Ambiente no Vercel:**
   ```
   VITE_API_URL=https://seu-backend.railway.app/api
   VITE_MERCADOPAGO_PUBLIC_KEY=APP_USR-16XUXiC5gsuWTcX03ANZAI6tYaQYb2Fl-120924-5945815842366386-2103311138
   ```

### Backend (Railway)

1. **Deploy no Railway:**
   ```bash
   # 1. Instale Railway CLI
   npm install -g @railway/cli
   
   # 2. Login e deploy
   railway login
   railway init
   railway up
   ```

2. **Variáveis de Ambiente no Railway:**
   ```
   MERCADOPAGO_ACCESS_TOKEN=APP_USR-5945815842366386-120924-16XUXiC5gsuWTcX03ANZAI6tYaQYb2Fl-2103311138
   MERCADOPAGO_PUBLIC_KEY=APP_USR-16XUXiC5gsuWTcX03ANZAI6tYaQYb2Fl-120924-5945815842366386-2103311138
   PORT=3001
   FRONTEND_URL=https://seu-site.vercel.app
   NOTIFICATION_URL=https://seu-backend.railway.app/api/mercadopago/webhook
   SUCCESS_URL=https://seu-site.vercel.app/pagamento/sucesso
   FAILURE_URL=https://seu-site.vercel.app/pagamento/falha
   PENDING_URL=https://seu-site.vercel.app/pagamento/pendente
   ```

---

## 🌐 Deploy em Servidor VPS

### Requisitos
- Node.js 18+
- PM2 (gerenciador de processos)
- Nginx (proxy reverso)
- SSL (Let's Encrypt)

### Passos

1. **Preparar servidor:**
   ```bash
   # Instalar Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Instalar PM2
   sudo npm install -g pm2
   
   # Instalar Nginx
   sudo apt update
   sudo apt install nginx
   ```

2. **Upload dos arquivos:**
   ```bash
   # Frontend (pasta dist após build)
   scp -r dist/* usuario@servidor:/var/www/html/
   
   # Backend
   scp -r server/* usuario@servidor:/var/www/api/
   ```

3. **Configurar PM2:**
   ```bash
   # No servidor
   cd /var/www/api
   npm install
   pm2 start server.js --name "ubytech-api"
   pm2 startup
   pm2 save
   ```

4. **Configurar Nginx:**
   ```nginx
   server {
       listen 80;
       server_name seudominio.com;
       
       # Frontend
       location / {
           root /var/www/html;
           try_files $uri $uri/ /index.html;
       }
       
       # Backend API
       location /api {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL com Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d seudominio.com
   ```

---

## ⚙️ Configurações Importantes

### 1. **Domínio Personalizado**
- Atualize `FRONTEND_URL` com seu domínio
- Configure DNS apontando para seu servidor/Vercel

### 2. **Webhooks do Mercado Pago**
- Configure `NOTIFICATION_URL` com seu domínio
- Teste webhooks em: https://www.mercadopago.com.br/developers/

### 3. **URLs de Retorno**
- `SUCCESS_URL`: Página de sucesso
- `FAILURE_URL`: Página de erro
- `PENDING_URL`: Página de pendente

### 4. **Segurança**
- Use HTTPS em produção
- Configure CORS adequadamente
- Mantenha credenciais seguras

---

## 🧪 Teste em Produção

1. **Teste de conectividade:**
   ```bash
   curl https://seudominio.com/api/test
   ```

2. **Teste de pagamento:**
   - Use cartões de teste do Mercado Pago
   - Verifique webhooks
   - Confirme redirecionamentos

---

## 📞 Suporte

Se precisar de ajuda com o deploy:
- WhatsApp: (24) 98814-7679
- Email: ubytechecommerce@gmail.com

**Boa sorte com seu deploy! 🚀**