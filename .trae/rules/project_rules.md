# Trae Automation Rules

## Git Push

- Use env var `GITHUB_TOKEN` (never commit secrets).
- Preferred push command (non-interaktif, aman, tidak mencetak token):

```
npm run trae:push
```

- Commit format:

```
[TRAE-AUTO] <area> - <deskripsi singkat>
```

## Quality Gates

- Lint: `npm run lint`
- Build: `npm run build`
- Start server: `npm start`

## Branch & Remote

- Remote: `jupli/grrrrr2`
- Push branch: `HEAD:main`
