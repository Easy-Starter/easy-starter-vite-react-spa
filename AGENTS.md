# Agent Instructions

- Read the active specification before editing files.
- Do not add dependencies without documenting the reason.
- Preserve repository boundaries and existing conventions.
- Never commit secrets.
- Run all available checks before declaring work complete.

## Architecture

- All route definitions must live under `src/routes`.
- Never manually edit `src/routeTree.gen.ts`.
- A simple page starts as one route file.
- Routes own URLs, loaders, guards, search validation, metadata, and page composition.
- Features own reusable business behavior.
- Features must not contain route declarations or `*Page` components.
- Route-specific components should be colocated in `-components` directories.
- Files and folders prefixed with `-` under `src/routes` are private route implementation.
- `app` owns application providers, theme, i18n, router creation, and global configuration.
- `shared` must remain independent of application and business features.
- Do not add a new abstraction until at least two real consumers need it.
- Do not create empty `api`, `model`, `ui`, or `lib` folders.
- Do not introduce generic `utils.ts`, `helpers.ts`, or `services.ts` files.
- Use TanStack Query for remote server state.
- Do not copy query data into a global client-state store.
- Import features through their public `index.ts`.
- Prefer direct imports within the same route or feature.
