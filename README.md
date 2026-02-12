# Membee SSO Login (React)

Small React app with three Membee SSO entries:
- Applicant
- Office
- Reviewer

Each button sends users to the same Membee SSO endpoint, with role-specific app/redirect parameters.

## Run

```bash
npm install
npm run dev
```

## Configure

Copy `.env.example` to `.env` and replace values with your real Membee SSO app IDs and redirect URIs.
