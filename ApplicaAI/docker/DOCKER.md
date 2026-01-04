# Local Development with Docker

Run the entire ApplicaAI application stack on your machine with Docker Compose. This setup includes the database, authentication, cache, and email testing—everything you need for local development.

## Quick Start

```bash
# 1. Configure Environment & copy environment file content from ".env.example" to ".env.local" and add your own AI API key. Add at least one of these keys: OPENAI_API_KEY, ANTHROPIC_API_KEY, or OPENROUTER_API_KEY
cp .env.example .env.local


# 2. Start docker services
cd docker
docker compose --env-file ../.env.local up

# 3. Wait for services for about 60 seconds
docker compose --env-file ../.env.local ps

# 4. Run the app locally from the project root
cd ..
pnpm dev
```

**Access the app:** http://localhost:3000 with the default login: `admin@admin.com` / `Admin123` 

> **Tip:** All docker  commands require `--env-file ../.env.local` flag to properly load your environment variables. This ensures that both the Docker and Next.js use the same configuration file.

## Services

| Service | URL | Description |
|---------|-----|-------------|
| **App** | http://localhost:3000 | ApplicaAI Next.js app (run locally) |
| **Supabase API Gateway** | http://localhost:54321 | API Gateway endpoints |
| **Supabase Studio** | http://localhost:54323 | Database management dashboard |
| **Background Service: PostgreSQL** | localhost:54322 | Direct database access if needed |
| **Background Service: Redis** | localhost:6379 | Rate limiting & caching |
| **Redis Commander** | http://localhost:8081 | Redis cache management interface |
| **Inbucket for email testing** | http://localhost:54324 | Preview test emails sent by app with email testing UI |

## Full Cotainer Mode with Docker (Optional)

Run the entire application - including the Next.js frontend app inside Docker containers instead of locally:

```bash
# From the docker directory, build and start everything including the app
docker compose --env-file ../.env.local --profile full up
```

Access the app at http://localhost:3000 with all services running in Docker.

## Default Access Credentials

| Service | Username | Password |
|---------|----------|----------|
| Admin User | admin@admin.com | Admin123 |
| Supabase Studio | supabase | supabase |
