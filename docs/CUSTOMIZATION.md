# Customization Guide

## Brand setup

Most project-specific changes start in `src/config/brand.ts`.

### Logo

Use public assets for logos so the paths are stable:

```ts
logo: {
  light: '/brand/logo.svg',
  dark: '/brand/logo-dark.svg',
  alt: 'Your Brand logo',
}
```

### Colors

Theme colors are semantic, not brand-color names. This keeps components reusable.

Good:

```ts
primary: '#2563eb'
surface: '#ffffff'
foreground: '#0f172a'
```

Avoid:

```ts
blue500: '#2563eb'
brandYellow: '#facc15'
```

Component CSS should use variables like `--color-primary`, not hardcoded hex values.

### Font

The default is a safe system font stack. For custom fonts, prefer self-hosted font files in `public/fonts` and add `@font-face` in `src/styles/index.css`.

Do not commit licensed font files unless your license allows it.

## Language setup

Add a new locale in `src/config/site.ts`:

```ts
{ code: 'de', label: 'Deutsch', dir: 'ltr' }
```

Then add a translation file:

```txt
src/i18n/resources/de.json
```

Finally, register it in `src/i18n/index.ts`.

## Routing setup

1. Create a page component in `src/pages`.
2. Add a route object in `src/config/routes.json`.
3. Map the route id to the component in `src/app/router.tsx`.
4. Add translation keys for the navigation label.

## SEO setup

For every page, add a local `SEO` component near the top of the component tree.

```tsx
<SEO title={t('about.seo.title')} description={t('about.seo.description')} path="/about" />
```

For production, set:

```bash
VITE_SITE_URL=https://your-domain.com
```

## Theme setup

Theme state supports:

- `light`
- `dark`
- `system`

The user's choice is stored in localStorage. If `system` is selected, the app follows `prefers-color-scheme`.
