# Synthex 🚀

**Synthex** is a world-class, real-time collaborative AI-powered code editor designed for modern development workflows. It combines the power of advanced AI models with seamless real-time collaboration, allowing developers to build, edit, and ship code faster than ever before.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=flat&logo=github)](https://github.com/AyushK5ingh/Synthex)
[![Next.js](https://img.shields.io/badge/Next.js-16%2B-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.4-EF4444?style=flat&logo=turborepo)](https://turbo.build/)

## ✨ Key Features

- 🤖 **AI-First Editing**: Intelligent code generation and refactoring powered by Google Gemini and Azure AI.
- 👥 **Real-time Collaboration**: Multi-user editing with conflict resolution using Yjs and ShareDB.
- ⚡ **Turbo-Powered Monorepo**: High-performance monorepo management with Turborepo and pnpm.
- 🏗️ **Modern UI/UX**: Premium interface built with Tailwind CSS, Framer Motion, and shadcn/ui.
- 🔒 **Secure Auth**: Professional user management and authentication with Clerk.
- 💰 **Payment Integration**: Seamless billing and payments powered by Razorpay.
- 📁 **Cloud Storage**: Reliable file storage and management using AWS S3.
- 📊 **Real-time Engine**: Low-latency communication via Socket.io.

## 🏗️ Architecture

Synthex is built as a robust monorepo with specialized applications and packages:

### Apps
- **`web`**: The main Next.js application, providing the core editor interface and user dashboard.
- **`ai-service`**: A dedicated service for AI inference and database interactions via Prisma.
- **`socket`**: Real-time synchronization server handling collaborative sessions.
- **`docs`**: Comprehensive documentation site built with Next.js.

### Packages
- **`ui`**: Shared React component library built with Tailwind CSS.
- **`utils`**: Common utility functions shared across the monorepo.
- **`eslint-config`**: Shared linting configurations.
- **`tailwind-config`**: Centralized Tailwind CSS configuration.
- **`typescript-config`**: Standardized TypeScript configurations.

## 🛠️ Tech Stack

- **Frontend**: Next.js 16/19, React 19, Tailwind CSS v3/v4, Framer Motion, Monaco Editor.
- **Backend**: Node.js, Express, Socket.io, Prisma ORM, Convex.
- **Real-time**: Yjs, ShareDB, WebSocket.
- **AI**: Google Generative AI (Gemini), Azure AI Inference.
- **Storage**: AWS S3.
- **Payments**: Razorpay.
- **Auth**: Clerk.
- **Infrastructure**: Turborepo, pnpm, Vercel.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- MongoDB / PostgreSQL (depending on configuration)
- AWS S3 Credentials
- Clerk API Keys
- Razorpay API Keys
- Google Gemini / Azure AI Keys

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AyushK5ingh/Synthex.git
   cd Synthex
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create `.env` files in `apps/web`, `apps/ai-service`, and `apps/socket` based on their respective `.env.example` / `.env.sample` files.

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   - Web App: [http://localhost:3000](http://localhost:3000)
   - Docs: [http://localhost:3001](http://localhost:3001)

## 🔧 Scripts

- `pnpm dev`: Start all apps in development mode.
- `pnpm build`: Build all apps for production.
- `pnpm lint`: Run linting across the monorepo.
- `pnpm check-types`: Run type checking.
- `pnpm format`: Format the entire codebase with Prettier.

## 🤝 Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

---

Made with ❤️ by [Ayush](https://github.com/AyushK5ingh) | Star ⭐ this repo if you found it helpful!
