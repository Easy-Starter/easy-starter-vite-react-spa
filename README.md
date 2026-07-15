<div align="center">

# Easy Starter Vite React SPA

**A lightweight, maintainable Vite + React foundation for API-driven SPAs, dashboards, internal tools, and embedded applications.**

[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?logo=github&logoColor=white)](https://github.com/easy-starter/easy-starter-vite-react-spa/generate) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) ![Status: foundation](https://img.shields.io/badge/status-foundation-orange) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)

[فارسی](README.fa.md) · [Documentation](https://github.com/easy-starter/easy-starter-docs) · [Report an issue](https://github.com/easy-starter/easy-starter-vite-react-spa/issues/new/choose)

</div>

> “What do we build for, if not to lessen each other’s hardship?”

> [!IMPORTANT]
> This repository is currently in the **foundation stage**. Do not treat it as production-ready until the first stable release.

## What it solves

Avoids turning a small client-side application into an oversized full-stack project while preserving structure, testability, and production build quality.

## Use this template for

- API-driven single-page applications
- Internal dashboards and admin tools
- Embedded widgets and interactive tools
- Static-hosted applications without a server runtime

**Not intended for:** SEO-critical public websites, server-rendered applications, or secret-bearing backend logic.

## Baseline

- Vite, React, and TypeScript
- Feature-oriented project boundaries
- Routing, forms, API client, and error-state conventions
- Environment validation without exposing secrets
- Tests, linting, CI, and static deployment profiles

Detailed architecture, conventions, deployment profiles, and extension guides belong in [`docs/`](docs/). Feature work starts from [`specs/`](specs/), and agent rules live in [`AGENTS.md`](AGENTS.md).

## Quick start

1. Click **Use this template** or run:

   ```bash
   gh repo create my-project --template easy-starter/easy-starter-vite-react-spa --private --clone
   cd my-project
   ```

2. Set the project name, package metadata, and environment values.
3. Start the project:

   ```bash
   cp .env.example .env.local
   make setup
   make dev
   make check
   ```

4. Write the first feature specification under `specs/`.
5. Implement the feature and keep `make check` green.

## Working agreement

- Read `AGENTS.md` and the relevant specification before changing code.
- Reuse existing patterns before adding abstractions or dependencies.
- Never commit credentials or production data.
- Run the repository quality checks before opening a pull request.
- Record architecture-changing decisions in `docs/decisions/`.

## Documentation

Start with `docs/getting-started.md`. Broader AI-first development guidance is maintained in [Easy Starter Docs](https://github.com/easy-starter/easy-starter-docs).

## Contributing and support

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for contribution rules and [`SUPPORT.md`](SUPPORT.md) for help. Security issues must follow [`SECURITY.md`](SECURITY.md).

## License

Released under the [MIT License](LICENSE).
