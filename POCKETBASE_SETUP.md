# PocketBase Setup Guide — Vision IT Systems Live Sandbox

This application connects to PocketBase via `VITE_POCKETBASE_URL` (defaults to `https://pb.demo.vision-it-systems.de`).

## 1. Environment Variable

Create a `.env` file (or configure in Docker / build environment):

```env
VITE_POCKETBASE_URL="https://pb.demo.vision-it-systems.de"
```

## 2. Required Collections & Fields

Log into your PocketBase Admin UI (`/_/`), create the two collections below as **Base** collections, and set their **API Rules** so anonymous sandbox visitors can submit leads/feedback without reading other users' records:

### Collection 1: `demo_leads`
- **Type**: Base collection
- **API Rules**:
  - `List/Search rule`: `null` (Admin only — protects B2B lead privacy!)
  - `View rule`: `null` (Admin only)
  - `Create rule`: `""` (empty string = public allow so visitors can submit leads)
  - `Update rule`: `null` (Admin only)
  - `Delete rule`: `null` (Admin only)
- **Fields**:
  1. `name` (`Plain text`, Required, Min: 1, Max: 160)
  2. `email` (`Email`, Required)
  3. `company` (`Plain text`, Required, Min: 1, Max: 160)
  4. `services` (`JSON` or `Select (Multiple)` with values: `n8n_automation`, `telegram_bot`, `web_android_app`, `ai_chatbot`, `docker_hosting`)
  5. `notes` (`Plain text`, Optional, Max: 2000)
  6. `language` (`Select (Single)`: `de`, `en`)
  7. `source_module` (`Plain text`, Optional: `chatbot`, `n8n`, `telegram`, `apps_roi`, `hero`, `navbar`, `section`)
  8. `submitted_at` (`DateTime`, Optional)

### Collection 2: `demo_feedback`
- **Type**: Base collection
- **API Rules**:
  - `List/Search rule`: `null` (Admin only)
  - `View rule`: `null` (Admin only)
  - `Create rule`: `""` (public allow for sandbox demo ratings)
  - `Update rule`: `null`
  - `Delete rule`: `null`
- **Fields**:
  1. `module` (`Select (Single)`, Required: `chatbot`, `n8n`, `telegram`, `apps_roi`)
  2. `rating` (`Number`, Required, Min: 1, Max: 5, No decimals)
  3. `comment` (`Plain text`, Optional, Max: 1000)
  4. `language` (`Select (Single)`: `de`, `en`)
  5. `submitted_at` (`DateTime`, Optional)

## 3. CORS & Reverse Proxy (Hetzner / Docker / Traefik)

Ensure PocketBase allows requests from `https://demo.vision-it-systems.de` (PocketBase enables `*` CORS by default when started with `--origins="*"`, or configure your origin in Traefik/Nginx).
