# Deployment Guide

## Static hosting

This app builds to static files in `dist`, so it can be deployed to:

- GitHub Pages
- Netlify
- Vercel static deployment
- Cloudflare Pages
- Any Nginx/Apache static host

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

## Environment variables

Set these in your hosting provider:

```bash
VITE_SITE_URL=https://your-domain.com
VITE_BASE_PATH=/
```

For GitHub Pages project sites:

```bash
VITE_BASE_PATH=/your-repo-name/
```

## SPA fallback

Because React Router runs on the client, your host should serve `index.html` for unknown routes.

For Netlify, add this file if needed:

```txt
public/_redirects
```

With this content:

```txt
/* /index.html 200
```

For Nginx, use a `try_files` fallback to `index.html`.
