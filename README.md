# Manifesto Specification

Semantic State Protocol for AI Agents. This repository hosts the VitePress-based specification site deployed to `spec.manifesto-ai.dev`.

> ⚠️ **Working Draft** — The Manifesto Specification is a living, experimental document. APIs, schemas, and semantics **will evolve** and breaking changes **may occur** while we incorporate feedback and real-world learnings.

## Requirements
- Node.js 20+
- npm (ships with Node)

## Setup
```bash
# npm
npm install
npm run docs:dev      # local dev server
npm run docs:build    # production build
npm run docs:preview  # preview built site

# pnpm (alternative)
pnpm install
pnpm run docs:dev
pnpm run docs:build
pnpm run docs:preview
```

## Specification Status & Intent

- **Working Draft / Experimental**: The specification is intentionally published early to invite experimentation, critique, and co-evolution with implementations. It is **not** a finalized standard and **may change incompatibly**.
- **Spec leads implementation**: Implementations may be partial or opinionated; the spec defines conceptual contracts, not performance guarantees.
- **Versioning**: `0.x` artifacts signal ongoing change and lack of backward-compatibility promises.

### What Manifesto Is / Is Not

**Manifesto IS**
- A semantic state model and design framework for AI-native systems
- A formalization of intent → effect → snapshot
- A shared world model for humans, UIs, and agents

**Manifesto is NOT**
- A drop-in production framework (yet)
- A frozen standard or compatibility commitment
- A replacement for every state management library

## Project Structure
- `docs/` — VitePress content and theme
  - `.vitepress/` — site config, Tailwind, theme components
  - `draft/` — Working Draft of the spec (sections 1-6 + appendices)
  - `guide/` — Non-normative guides
  - `rfc/` — Proposal process and template
  - `public/` — Static assets (including `schema.json`)
- `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json` — tooling configs
- `.github/workflows/deploy.yml` — GitHub Actions build/deploy via Vercel

## Deployment
The provided GitHub Action builds the docs on pushes to `main` and deploys to Vercel. Set the following secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.

## Contributing
- Use RFC 2119 keywords for normative changes.
- Submit proposals via `/rfc` and issues on GitHub.
- Keep Snapshot and Effect semantics deterministic and documented.
