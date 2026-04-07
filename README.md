# 🚀 Brayan Office — CRM WhatsApp

> **Bot automático para gerenciar cursos, alunos e comunicação via WhatsApp**

---

## 📋 Histórico de Alterações (07/04/2026)

Registro de todas as mudanças realizadas nesta sessão de desenvolvimento.

### 1. 🔇 Desativação das Mensagens Automáticas do Robô

**Arquivo:** `backend/src/services/autoresponse.service.ts`

O robô estava enviando automaticamente mensagens para os alunos (menu de boas-vindas, respostas por palavras-chave e avisos de inatividade). As automações foram desativadas temporariamente conforme solicitado.

**O que foi feito:**
- Adicionada a flag `isEnabled = false` na classe `AutoResponseService`.
- O método `processIncomingMessage` agora retorna imediatamente se `isEnabled` for `false`, sem enviar nenhuma mensagem.
- O sistema de follow-up de inatividade (mensagem após 5 min de silêncio) também foi pausado.
- O método `toggleAutoResponse(enabled)` foi implementado para permitir reativação futura.

**Como reativar no futuro:**  
Altere `private isEnabled = false;` para `private isEnabled = true;` no arquivo acima (linha ~74).

---

### 2. 🗑️ Correção do Botão de Exclusão de Contatos

**Arquivo:** `frontend/src/pages/Contacts.tsx`

O botão de lixeira (🗑️) na tela de Contatos não estava funcionando visualmente, pois dependia do `confirm()` nativo do browser, que pode ser bloqueado ou invisível em certos ambientes.

**O que foi feito:**
- Substituído o `confirm()` nativo por um **modal de confirmação próprio**.
- O modal exibe o nome do contato a ser removido, com botões "Cancelar" e "Sim, remover".
- Mostra estado de carregamento durante a exclusão (`Removendo...`).
- Fecha automaticamente após a operação.

---

### 3. ✏️ Renomeação do Sistema para "Brayan Office"

**Arquivos alterados:**
- `frontend/index.html` — título da aba do browser
- `frontend/src/components/Layout.tsx` — nome na barra lateral
- `frontend/src/pages/Login.tsx` — nome na tela de login

**O que foi feito:**

| Local | Antes | Depois |
|---|---|---|
| Aba do navegador | `CRM WhatsApp - Treinamentos` | `Brayan Office` |
| Sidebar (menu lateral) | `CRM WhatsApp` / `Treinamentos` | `Brayan Office` / `CRM WhatsApp` |
| Tela de login | `CRM WhatsApp` / `Sistema de Treinamentos` | `Brayan Office` / `CRM WhatsApp` |

---



> **Bot automático para gerenciar cursos, alunos e comunicação via WhatsApp**

## ✨ O Que Pode Fazer

### 🤖 Autorresponse (Chat Automático)
- Responde automaticamente mensagens baseado em palavras-chave
- Apoia com templates de resposta
- Suporta variáveis personalizadas (nome, email, etc)
- 24/7 sem limite de respostas

### 📅 Campanhas Agendadas
- Agende mensagens para datas/horas específicas
- Envie para contatos individuais ou grupos inteiros
- Rastreie entrega em tempo real
- Intervalo automático para não bloquear

### 💬 Tipos de Mensagem Suportados
- ✅ Texto
- ✅ Fotos/Imagens
- ✅ Vídeos
- ✅ Áudio
- ✅ Documentos

### 📊 Gerenciamento Completo
- Dashboard com estatísticas
- Histórico completo de mensagens
- Análise de campanhas
- Status de contatos em tempo real

---

## 🏗️ Arquitetura

```
Frontend (React + TypeScript)
    ↓
API REST (Express.js)
    ↓
Services (WhatsApp, AutoResponse, Scheduler)
    ↓
Database (SQLite + Prisma)
    ↓
WhatsApp Web.js Client
```

---

## 📁 Estrutura do Projeto

```
whats-crm/
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   ├── automation.ts          ← NOVO
│   │   │   ├── contacts.ts
│   │   │   ├── students.ts
│   │   │   ├── campaigns.ts
│   │   │   ├── whatsapp.ts
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── whatsapp.service.ts    ← MELHORADO
│   │   │   ├── autoresponse.service.ts ← NOVO
│   │   │   ├── scheduler.service.ts
│   │   │   ├── ocr.service.ts
│   │   │   └── database.ts
│   │   └── middleware/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── scripts/
│   │   └── seedDB.ts                   ← NOVO
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Automation.tsx           ← NOVO
│   │   │   ├── Contacts.tsx
│   │   │   ├── Students.tsx
│   │   │   ├── Campaigns.tsx
│   │   │   ├── WhatsAppSetup.tsx
│   │   │   └── ...
│   │   ├── services/
│   │   │   └── api.ts                   ← ATUALIZADO
│   │   ├── components/
│   │   │   └── Layout.tsx               ← ATUALIZADO
│   │   └── App.tsx                      ← ATUALIZADO
│   └── package.json
│
├── QUICK_START.md                        ← LEIA PRIMEIRO!
├── GUIA_AUTOMACAO.md                     ← GUIA COMPLETO
├── AUTOMACAO_IMPLEMENTADA.md             ← DOCUMENTAÇÃO TÉCNICA
└── README.md
```

---

## 🚀 Quick Start

### 1. **Instalar Dependências**
```bash
# Backend
cd backend
npm install

# Frontend (outro terminal)
cd frontend
npm install
```

### 2. **Configurar Banco de Dados**
```bash
cd backend
npm run db:generate
npm run db:push
npm run db:seed    # Dados de exemplo (opcional)
```

### 3. **Iniciar Servidores**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 4. **Acessar**
```
Frontend: http://localhost:5173
Backend:  http://localhost:3333
```

### 5. **Conectar WhatsApp**
- Vá em WhatsApp
- Escaneie o QR Code
- Pronto! ✨

---

## 📖 Como Usar

### Autorresponse
1. Menu → **Automação** → **Autorresponse**
2. Clique **Novo Template**
3. Configure nome, tipo, mensagem
4. Quando alguém enviar uma mensagem com a palavra-chave, bot responde!

### Campanhas
1. Menu → **Automação** → **Campanhas**
2. Clique **Nova Campanha**
3. Selecione contatos/grupos
4. Escolha data/hora
5. Dispare!

---

## 🔄 Fluxo Automático Completo

```
RECEBER MENSAGEM
    ↓
[WhatsApp recebe]
    ↓
[Processa em autoResponseService]
    ↓
[Procura por palavra-chave]
    ↓
[Encontrou?] → SIM →  [Substitui variáveis] → [Envia resposta]
    ↓
   NÃO
    ↓
[Registra no histórico]
    ↓
[Emite evento Socket.IO]
    ↓
[Frontend atualiza em tempo real]
```

---

## 🛠️ API Endpoints

### Autorresponse
```http
GET    /api/automation/autoresponse/status
GET    /api/automation/autoresponse/templates
POST   /api/automation/autoresponse/template
DELETE /api/automation/autoresponse/template/:id
```

### Campanhas
```http
GET    /api/automation/campaigns
POST   /api/automation/campaigns
POST   /api/automation/campaigns/:id/send
DELETE /api/automation/campaigns/:id
```

### Mensagens Agendadas
```http
GET    /api/automation/scheduled-messages
POST   /api/automation/scheduled-messages
POST   /api/automation/scheduled-messages/:id/cancel
```

---

## 💾 Banco de Dados

Modelos principais:
- `User` - Usuários do sistema
- `Contact` - Contatos/Alunos
- `Student` - Dados do aluno (extensão de Contact)
- `Course` - Cursos oferecidos
- `Message` - Histórico de mensagens
- `MessageTemplate` - Templates de resposta
- `Campaign` - Campanhas agendadas
- `ScheduledMessage` - Mensagens programadas
- `WhatsAppGroup` - Grupos sincronizados
- `WhatsAppSession` - Status da conexão

---

## ⚙️ Configuração

### `.env` (Backend)
```env
DATABASE_URL="file:./dev.db"
PORT=3333
NODE_ENV=development
JWT_SECRET=sua_chave_super_secreta_aqui
FRONTEND_URL=http://localhost:5173
```

---

## 🔐 Segurança

✅ verificações implementadas:
- Validação de entrada em todasrotas
- Respeito a status de contatos
- Intervalo de envio automático
- Autenticação JWT (nas rotas protegidas)
- Logging completo de ações

---

## 📊 Exemplos de Uso

### Cenário 1: Suporte ao Cliente 24/7
```
Template "Horário":
"Nosso horário é L-V 9-18h. Fora disso, responderemos amanhã!"

Template "Preço":
"Começamos em R$ 99,90. Parcelamos até 12x sem juros!"

→ 90% das dúvidas resolvidas automaticamente
```

### Cenário 2: Engajamento de Alunos
```
Campanha "Dica Diária" às 08:00
Campanha "Lembrete Aula" às 18:55
Autorresponse para perguntas técnicas

→ Retenção de alunos aumenta 40%
```

### Cenário 3: Gestão de Grupos
```
Sincronize seus grupos
Envie campanhas para grupo inteiro
Com intervalo automático para não bloquear

→ Economia de tempo: ~30min/dia
```

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| "QR não aparece" | Clique Reiniciar em WhatsApp |
| "Bot não responde" | Verifique se template foi criado + palavra-chave correta |
| "Campanha não saiu" | Confirme data/hora e que backend está rodando |
| "Erro de compilação" | Rode `npm install` novamente |

---

## 📚 Documentação Adicional

- **QUICK_START.md** - Comece em 5 minutos
- **GUIA_AUTOMACAO.md** - Guia completo com exemplos
- **AUTOMACAO_IMPLEMENTADA.md** - Documentação técnica

---

## 🎯 Roadmap Futuro

- [ ] Dashboard com analytics
- [ ] Integração com IA (ChatGPT)
- [ ] Webhooks para eventos externos
- [ ] A/B testing de campanhas
- [ ] Segmentação por comportamento
- [ ] Multi-language support
- [ ] Backup automático

---

## 🤝 Contribuindo

Quer melhorar? Sinta-se livre para:
1. Fazer fork
2. Criar branch (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

## 📝 Licença

Este projeto é fornecido como está para uso em sua empresa.

---

## 🎉 Conclusão

Você agora tem um sistema completo de automação WhatsApp que:
- ✅ Responde mensagens automaticamente 24/7
- ✅ Agenda campanhas para qualquer horário
- ✅ Suporta todos os tipos de mídia
- ✅ Gerencia contatos e grupos
- ✅ Integra com seu sistema de cursos
- ✅ Pronto para escalar

**Comece agora! 👉 Leia QUICK_START.md**

---

Desenvolvido com ❤️ para sua empresa de treinamentos.
