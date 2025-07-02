# 🚀 Deploy Vercel - Ubytech.com.br

## ⚡ Passos Simples (10 minutos)

### 1. **Preparar o Código**
✅ Código já está pronto!
✅ Build configurado
✅ Variáveis de ambiente definidas

### 2. **Deploy no Vercel**

1. **Acesse:** [vercel.com](https://vercel.com)
2. **Faça login** com GitHub
3. **Clique em "New Project"**
4. **Importe este repositório**

### 3. **Configurações do Projeto**

**Framework Preset:** `Vite`
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`

### 4. **Variáveis de Ambiente**

No painel do Vercel, adicione:

```
VITE_API_URL=https://ubytech-backend.railway.app/api
VITE_MERCADOPAGO_PUBLIC_KEY=APP_USR-697ad0e6-a689-4908-8cac-30658252bf5e
```

### 5. **Deploy do Backend (Railway)**

1. **Acesse:** [railway.app](https://railway.app)
2. **Conecte com GitHub**
3. **Deploy da pasta `server/`**
4. **Adicione as variáveis:**

```
MERCADOPAGO_ACCESS_TOKEN=APP_USR-5945815842366386-062818-9a6767239719c70fafe74ac362fa51e5-1806786938
MERCADOPAGO_PUBLIC_KEY=APP_USR-697ad0e6-a689-4908-8cac-30658252bf5e
PORT=3001
FRONTEND_URL=https://ubytech.com.br
NOTIFICATION_URL=https://ubytech-backend.railway.app/api/mercadopago/webhook
SUCCESS_URL=https://ubytech.com.br/pagamento/sucesso
FAILURE_URL=https://ubytech.com.br/pagamento/falha
PENDING_URL=https://ubytech.com.br/pagamento/pendente
```

### 6. **Configurar Domínio Personalizado**

No Vercel:
1. **Settings → Domains**
2. **Add Domain:** `ubytech.com.br`
3. **Configurar DNS no seu provedor:**

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

---

## 🎯 Checklist Final

- [ ] Projeto importado no Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Backend deployado no Railway
- [ ] Domínio personalizado configurado
- [ ] DNS apontando para Vercel
- [ ] Teste de pagamento realizado

---

## 🧪 Testes

### 1. **Teste o Frontend:**
```
https://ubytech.com.br
```

### 2. **Teste a API:**
```
https://ubytech-backend.railway.app/api/test
```

### 3. **Teste de Pagamento:**
- Use cartões de teste do Mercado Pago
- Verifique redirecionamentos

---

## 📱 Cartões de Teste

```
Visa: 4509 9535 6623 3704
Mastercard: 5031 7557 3453 0604
PIX: Aprovado automaticamente
```

---

## 🎉 Resultado Final

**Frontend:** https://ubytech.com.br
**Backend:** https://ubytech-backend.railway.app
**Admin:** https://vercel.com/dashboard

**Tudo funcionando! 🚀**