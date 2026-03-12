# Deploying Synthex to Vercel

This guide outlines the steps to deploy the Synthex monorepo to Vercel with Neon DB integration.

## 1. Prerequisites
- A [Vercel](https://vercel.com) account.
- A [Neon](https://neon.tech) account with a database created (you provided the connection string).
- GitHub access to the Synthex repository.

## 2. Environment Variables
Add the following environment variables to your Vercel project settings:

| Variable | Value | Description |
| :--- | :--- | :--- |
| `DATABASE_URL` | `postgresql://neondb_owner:...` | Your Neon DB connection string |
| `GITHUB_TOKEN` | `github_pat_...` | Your GitHub AI token |
| `NEXT_PUBLIC_CONVEX_URL` | `https://...` | Your Convex URL |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | `pk_test_...` | Clerk Publishable Key |
| `CLERK_SECRET_KEY` | `sk_test_...` | Clerk Secret Key |
| `MONGO_URI` | `mongodb://...` | MongoDB URI (if still used by web app) |
| `NEXT_PUBLIC_BACKEND_URL` | `https://your-socket-server.com` | Socket.io server URL |

## 3. Vercel Configuration
Vercel should automatically detect the Next.js project in `apps/web`.
- **Framework Preset**: Next.js
- **Root Directory**: `apps/web` (or root if using Turbo)
- **Build Command**: `cd ../.. && pnpm build` (if running from root)

## 4. Prisma Setup (AI Service)
The `ai-service` uses Prisma. To sync your Neon DB:
1. Run `pnpm run generate` in `apps/ai-service`.
2. Run `pnpm run db:push` in `apps/ai-service` to create the tables in Neon.

## 5. Socket.io Server
Vercel does not support persistent WebSocket connections (Socket.io) in Serverless Functions.
> [!IMPORTANT]
> You should host the `apps/socket` server separately (e.g., on Render, Railway, or a VPS) and update `NEXT_PUBLIC_BACKEND_URL` in Vercel to point to it.
