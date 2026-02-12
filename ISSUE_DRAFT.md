# Issue Draft: Improve Membee SSO Role Login

Use this text to create an issue in your Git hosting UI.

## Title
`[Membee SSO] Fix role-based SSO flow for applicant, office, reviewer`

## Description
The current implementation needs improvement for role-based Membee SSO login.

### Goal
Implement and validate a clean Membee SSO flow for these roles:
- Applicant
- Office
- Reviewer

### Requirements
- Keep all roles on Membee SSO (existing members sign in with Membee account)
- Keep implementation minimal and easy to maintain
- Ensure environment variables are clear

### Conflict-free merge checklist
- Work in a dedicated branch for only this issue
- Pull/rebase latest main before opening PR
- Keep PR scoped to only files related to this issue
- Resolve conflicts locally before merge

### Done when
- All three role buttons route correctly to Membee SSO
- README/env docs are correct
- Basic local verification is completed
