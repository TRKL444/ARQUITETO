# 🏗️ ARQUITETO - Sistema de Evolução Pessoal

**ARQUITETO** é um sistema inovador de evolução pessoal que gamifica o desenvolvimento humano através de um sistema de atributos RPG, rastreamento de atividades inteligentes e análise de dados comportamentais.

## 🎯 Visão Geral

O ARQUITETO transforma o desenvolvimento pessoal em uma jornada épica, onde cada atividade registrada contribui para o crescimento em cinco atributos principais:

- **FOR (Força)** — Disciplina e força de vontade
- **INT (Inteligência)** — Conhecimento e aprendizado
- **VIT (Vitalidade)** — Saúde e bem-estar
- **AGI (Agilidade)** — Produtividade e eficiência
- **REC (Resiliência)** — Recuperação e equilíbrio emocional

## 🚀 Funcionalidades

### ✅ Autenticação
- Login/Registro com JWT
- Protected routes
- Auto-logout em token expirado

### ✅ Dashboard
- Visualização de estatísticas em tempo real
- Cards com informações principais
- Layout responsivo e minimalista

### ✅ Atividades
- Criar, listar, editar e deletar atividades
- Categorização automática
- Rastreamento de XP por atributo

### ✅ Metas
- Criar e gerenciar metas pessoais
- Priorização (baixa, média, alta)
- Deadlines e acompanhamento

### ✅ Analytics
- Correlações detectadas automaticamente
- Métricas de desempenho
- Evolução de atributos
- Gráficos interativos

### ✅ Perfil
- Visualizar dados pessoais
- Editar informações
- Avatar do usuário
- Histórico de conquistas

### ✅ Configurações
- Preferências de notificações
- Tema (Dark/Light)
- Idioma
- Segurança

## 💻 Stack Tecnológico

### Frontend
- **React 18** — Framework UI moderno
- **React Router v6** — Roteamento
- **Axios** — Cliente HTTP
- **Context API** — Gerenciamento de estado
- **CSS Puro** — Estilos responsivos

### Características
- Design minimalista e profissional
- Interface responsiva (mobile-first)
- Dark mode elegante
- Sem dependências de UI pesadas

## 📦 Instalação

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Setup Rápido

```bash
# 1. Clonar o repositório
git clone https://github.com/TRKL444/ARQUITETO.git
cd ARQUITETO

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas configurações

# 4. Rodar o servidor de desenvolvimento
npm start
```

O frontend estará disponível em: **http://localhost:3000**

## 🔧 Variáveis de Ambiente

```env
# URL da API backend
REACT_APP_API_URL=http://localhost:8000
```

## 📁 Estrutura do Projeto

```
ARQUITETO/
├── public/                 # Arquivos estáticos
├── src/
│   ├── pages/             # Páginas principais
│   │   ├── LoginPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── ActivitiesPage.jsx
│   │   ├── GoalsPage.jsx
│   │   ├── AnalyticsPage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── SettingsPage.jsx
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── PrivateRoute.jsx
│   ├── context/          # Context API
│   │   └── AuthContext.jsx
│   ├── services/         # Serviços HTTP
│   │   └── api.service.js
│   ├── config/           # Configurações
│   │   └── api.js
│   ├── styles/           # Estilos CSS
│   ├── App.jsx           # Componente raiz
│   ├── index.js          # Entry point
│   └── index.css         # Estilos globais
├── package.json          # Dependências
├── .env                  # Variáveis de ambiente
└── README.md            # Este arquivo
```

## 🎨 Design

O ARQUITETO utiliza uma **estética minimalista e profissional** com:

- **Paleta de cores**: Dark mode com tons de cinza e azul sutil
- **Tipografia**: Geist (display) + sistema limpo
- **Layout**: Sidebar + conteúdo principal responsivo
- **Componentes**: Cards, gráficos e formulários elegantes

## 🔌 Integração com Backend

O frontend está pronto para integração com um backend FastAPI. Configure a URL da API em `.env`:

```env
REACT_APP_API_URL=http://seu-backend.com
```

### Endpoints Esperados

- `POST /api/v1/auth/register` — Registrar usuário
- `POST /api/v1/auth/login` — Fazer login
- `GET /api/v1/users/me` — Obter dados do usuário
- `POST /api/v1/activities` — Criar atividade
- `GET /api/v1/activities` — Listar atividades
- `POST /api/v1/goals` — Criar meta
- `GET /api/v1/goals` — Listar metas

## 🚀 Desenvolvimento

### Scripts Disponíveis

```bash
# Rodar em modo desenvolvimento
npm start

# Build para produção
npm run build

# Rodar testes
npm test

# Eject (cuidado!)
npm run eject
```

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔐 Segurança

- Tokens JWT armazenados em localStorage
- Protected routes com PrivateRoute
- Auto-logout em token expirado
- CORS configurado

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📧 Contato

Para dúvidas ou sugestões, abra uma issue no GitHub ou entre em contato através de:
- GitHub: [@TRKL444](https://github.com/TRKL444)

---

## 🎯 Próximas Etapas

- [ ] Implementar backend em FastAPI
- [ ] Integração com Google Gemini para análise de atividades
- [ ] Sistema de notificações em tempo real
- [ ] Exportação de dados (PDF/CSV)
- [ ] Integração com calendário
- [ ] Mobile app (React Native)
- [ ] Testes unitários e E2E
- [ ] CI/CD com GitHub Actions

---

**Status**: 🟢 Frontend Pronto | ⏳ Backend em Desenvolvimento

Comece a evoluir! 🚀
