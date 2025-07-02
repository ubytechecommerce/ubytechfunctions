# 🚀 Deploy Ubytech - ubytech.com.br

## ✅ Configuração Completa para seu Domínio

Tudo já está configurado para **https://ubytech.com.br/**!

---

## 🎯 Opções de Deploy

### 1. **Servidor VPS (Recomendado para domínio próprio)**
- **Completo**: Frontend + Backend no mesmo servidor
- **Controle total** do seu domínio

### 2. **Vercel + Railway**
- **Frontend**: Vercel
- **Backend**: Railway
- **Domínio personalizado** no Vercel

---

## 🌐 Deploy no Servidor VPS (ubytech.com.br)

### Pré-requisitos
```bash
# No seu servidor
sudo apt update
sudo apt install nodejs npm nginx certbot python3-certbot-nginx
sudo npm install -g pm2
```

### 1. **Upload dos Arquivos**
```bash
# Fazer build local
npm run build

# Upload para servidor
scp -r dist/* usuario@ubytech.com.br:/var/www/html/
scp -r server/* usuario@ubytech.com.br:/var/www/api/
```

### 2. **Configurar Backend**
```bash
# No servidor
cd /var/www/api
npm install

# Copiar arquivo de produção
cp .env.production .env

# Iniciar com PM2
pm2 start server.js --name "ubytech-api"
pm2 startup
pm2 save
```

### 3. **Configurar Nginx**
```nginx
# /etc/nginx/sites-available/ubytech.com.br
server {
    listen 80;
    server_name ubytech.com.br www.ubytech.com.br;
    
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
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Ativar site
sudo ln -s /etc/nginx/sites-available/ubytech.com.br /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. **SSL com Let's Encrypt**
```bash
sudo certbot --nginx -d ubytech.com.br -d www.ubytech.com.br
```

---

## 🔧 Deploy Alternativo (Vercel + Railway)

### Frontend (Vercel)
1. **Conectar repositório no Vercel**
2. **Configurações:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `/`

3. **Variáveis de Ambiente:**
   ```
   VITE_API_URL=https://ubytech-api.railway.app/api
   VITE_MERCADOPAGO_PUBLIC_KEY=APP_USR-16XUXiC5gsuWTcX03ANZAI6tYaQYb2Fl-120924-5945815842366386-2103311138
   ```

4. **Domínio Personalizado:**
   - Adicionar `ubytech.com.br` no Vercel
   - Configurar DNS: `CNAME @ cname.vercel-dns.com`

### Backend (Railway)
1. **Deploy:**
   ```bash
   cd server
   railway login
   railway init
   railway up
   ```

2. **Variáveis de Ambiente:**
   ```
   MERCADOPAGO_ACCESS_TOKEN=APP_USR-5945815842366386-120924-16XUXiC5gsuWTcX03ANZAI6tYaQYb2Fl-2103311138
   MERCADOPAGO_PUBLIC_KEY=APP_USR-16XUXiC5gsuWTcX03ANZAI6tYaQYb2Fl-120924-5945815842366386-2103311138
   PORT=3001
   FRONTEND_URL=https://ubytech.com.br
   NOTIFICATION_URL=https://ubytech-api.railway.app/api/mercadopago/webhook
   SUCCESS_URL=https://ubytech.com.br/pagamento/sucesso
   FAILURE_URL=https://ubytech.com.br/pagamento/falha
   PENDING_URL=https://ubytech.com.br/pagamento/pendente
   ```

---

## ⚙️ Configurações do Mercado Pago

### 1. **Webhook Configuration**
No painel do Mercado Pago:
- URL: `https://ubytech.com.br/api/mercadopago/webhook`
- Eventos: `payment`

### 2. **URLs de Retorno**
Já configuradas:
- ✅ Sucesso: `https://ubytech.com.br/pagamento/sucesso`
- ❌ Falha: `https://ubytech.com.br/pagamento/falha`
- ⏳ Pendente: `https://ubytech.com.br/pagamento/pendente`

---

## 🧪 Testes

### 1. **Teste de Conectividade**
```bash
curl https://ubytech.com.br/api/test
```

### 2. **Teste de Pagamento**
- Use cartões de teste do Mercado Pago
- Verifique redirecionamentos
- Confirme webhooks

### 3. **Cartões de Teste**
```
Visa: 4509 9535 6623 3704
Mastercard: 5031 7557 3453 0604
PIX: Aprovado automaticamente
```

---

## 📋 Checklist Final

- [ ] Servidor configurado
- [ ] Arquivos enviados
- [ ] PM2 rodando
- [ ] Nginx configurado
- [ ] SSL ativo
- [ ] DNS apontando
- [ ] Variáveis de ambiente configuradas
- [ ] Webhook do Mercado Pago configurado
- [ ] Testes de pagamento realizados

---

## 🎉 Seu site estará em:
**https://ubytech.com.br/**

Tudo configurado para seu domínio! 🚀