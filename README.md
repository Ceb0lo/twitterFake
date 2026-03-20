# 🐦 Twitter Fake

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://twitter-fake.vercel.app/)
[![PythonAnywhere](https://img.shields.io/badge/API-PythonAnywhere-blue?logo=python)](https://cebolo.pythonanywhere.com/api/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Django](https://img.shields.io/badge/Django-5.0-green?logo=django)](https://www.djangoproject.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)](https://www.typescriptlang.org/)

Uma réplica funcional do Twitter/X desenvolvida para estudo e demonstração de habilidades full-stack. O projeto implementa as principais funcionalidades da rede social com uma API RESTful e um frontend moderno e responsivo.

## 🚀 Demonstração

- **Frontend:** [https://twitter-fake.vercel.app/](https://twitter-fake.vercel.app/)
- **API:** [https://cebolo.pythonanywhere.com/api/](https://cebolo.pythonanywhere.com/api/)

## ✨ Funcionalidades

### 👤 Autenticação
- Criar conta com email e senha
- Login seguro com JWT
- Editar perfil (foto, bio, nome de usuário)

### 📝 Posts
- Criar tweets com texto
- Visualizar timeline com posts dos usuários seguidos
- Ver detalhes de cada post

### 💬 Interações
- ❤️ Curtir/descurtir tweets
- 💬 Comentar em posts
- 👥 Seguir/deixar de seguir outros usuários

### 👨‍💻 Perfil
- Visualizar perfil próprio e de outros usuários
- Ver estatísticas (seguidores, seguindo, posts)
- Editar informações pessoais

## 🛠️ Tecnologias

### Frontend
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Redux Toolkit** - Gerenciamento de estado
- **React Router DOM** - Navegação
- **Styled Components** - Estilização
- **Bootstrap 5** - Componentes UI
- **React Icons** - Ícones

### Backend
- **Django 5** - Framework web
- **Django REST Framework** - API RESTful
- **Simple JWT** - Autenticação JWT
- **Django CORS Headers** - Gerenciamento CORS
- **Pillow** - Processamento de imagens

### Database
- **SQLite** (desenvolvimento) / PostgreSQL (produção)

## 📊 Modelos de Dados

```sql
User
├── id (PK)
├── username
├── email
├── password
├── foto (avatar)
├── bio
└── created_at

Post
├── id (PK)
├── user_id (FK → User)
├── text
└── created_at

Like
├── id (PK)
├── user_id (FK → User)
├── post_id (FK → Post)
└── created_at

Comment
├── id (PK)
├── user_id (FK → User)
├── post_id (FK → Post)
├── text
└── created_at

Follow
├── id (PK)
├── follower_id (FK → User)
├── following_id (FK → User)
└── created_at