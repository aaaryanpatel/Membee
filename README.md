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

## Create an issue and solve it yourself (safe merge workflow)

1. Create an issue using `.github/ISSUE_TEMPLATE/bug_report.md` or copy `ISSUE_DRAFT.md`.
2. Create a branch named like: `issue-<number>-short-title`.
3. Keep your changes focused only on that issue.
4. Rebase onto latest `main` before opening your PR.
5. Resolve any conflicts locally, then push.

This keeps merges clean and reduces conflict risk.
