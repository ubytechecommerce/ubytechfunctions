# 🚀 Deploy Rápido - Ubytech

## ⚡ Opção Mais Fácil: Vercel + Railway

### 1. **Frontend no Vercel (5 minutos)**

1. **Vá para [vercel.com](https://vercel.com)**
2. **Conecte com GitHub**
3. **Importe este repositório**
4. **Configure:**
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Variáveis de Ambiente:**
   ```
   VITE_API_URL=https://ubytech-api.railway.app/api
   VITE_MERCADOPAGO_PUBLIC_KEY=APP_USR-697ad0e6-a689-4908-8cac-30658252bf5e
   ```

6. **Deploy!** ✅

### 2. **Backend no Railway (3 minutos)**

1. **Vá para [railway.app](https://railway.app)**
2. **Conecte com GitHub**
3. **Deploy da pasta `server/`**
4. **Adicione variáveis:**
   ```
   MERCADOPAGO_ACCESS_TOKEN=APP_USR-5945815842366386-062818-9a6767239719c70fafe74ac362fa51e5-1806786938
   MERCADOPAGO_PUBLIC_KEY=APP_USR-697ad0e6-a689-4908-8cac-30658252bf5e
   PORT=3001
   FRONTEND_URL=https://ubytech.com.br
   ```

### 3. **Domínio Personalizado (2 minutos)**

No Vercel:
1. **Settings → Domains**
2. **Adicionar:** `ubytech.com.br`
3. **Configurar DNS:**
   ```
   CNAME @ cname.vercel-dns.com
   ```

---

## 🎉 Pronto!

**Total: ~10 minutos**

Seu site estará em: **https://ubytech.com.br**

---

## 🔧 Alternativa Ainda Mais Rápida

Se você tem **cPanel/Hospedagem**:

1. **Faça o build:**
   ```bash
   npm run build
   ```

2. **Upload da pasta `dist/`** para seu servidor

3. **Configure API** separadamente

**Total: ~5 minutos**

---

## 📞 Precisa de Ajuda?

WhatsApp: (24) 98814-7679

**Qual opção você prefere?** 🚀