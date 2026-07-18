## Project Structure

src/
├── app/
│ ├── layouts/ # پوسته عمومی و داشبورد
│ ├── providers/ # Query، Theme و Providerهای سراسری
│ ├── styles/ # Design tokens و CSS عمومی
│ ├── devtools.tsx
│ ├── query-client.ts
│ └── router.ts
│
├── routes/ # تعریف URL، Loader، Guard و Search Params
│ ├── \_\_root.tsx
│ ├── \_public.tsx
│ ├── \_public/
│ ├── \_app.tsx
│ └── \_app/
│
├── pages/ # طراحی و Composition هر صفحه
│ ├── home/
│ ├── about/
│ ├── dashboard/
│ └── settings/
│
├── features/ # قابلیت‌های مستقل بیزینسی
│ ├── dashboard-summary/
│ └── theme-toggle/
│
└── shared/ # کدهای عمومی و مستقل از بیزینس
├── api/
├── components/ui/
├── config/
├── hooks/
├── lib/
└── theme/

## Dependency Flow

routes
↓
pages
↓
features
↓
shared

src/
├── app/
│ ├── layouts/
│ | ├── app-shell.tsx
│ | ├── public-layout.tsx
│ ├── providers/
│ | ├── app-providers.tsx
│ | ├── theme-provider.tsx
│ ├── styles/
│ | ├── globals.css
│ | ├── theme.css
│ | ├── tokens.css
│ ├── config/
│ | ├── brand.ts
│ | ├── env.ts
│ | ├── routes.json
│ | ├── site.ts
│ ├── i18n/
│ | ├── resources/
│ | | ├── en.json
│ | | ├── fa.json
│ | ├── index.ts
│ ├── routes/
│ | ├── \_app/
│ | | ├── dashboard.tsx
│ | | ├── profile.tsx
│ | | ├── settings.tsx
│ | ├── \_public/
│ | | ├── about.tsx
│ | | ├── contact.tsx
│ | | ├── index.tsx //landing page
│ | | ├── login.tsx
│ | | ├── register.tsx
│ | | ├── pricing.tsx
│ | ├── \_\_root.tsx
│ | ├── \_app.tsx
│ | ├── \_public.tsx
│ ├── scripts/
│ | ├── generate-seo.mjs
│ ├── theme/
│ | ├── theme-context.ts
│ | ├── theme-storage.ts
│ | ├── theme.types.ts
│ | ├── ThemeProvider.tsx
│ | ├── useTheme.ts
│ ├── utils/
│ | ├── absoluteUrls.ts
│ | ├── classNames.test.ts
│ | ├── classNames.ts
│ ├── index.tsx
│ ├── providers.tsx
│ ├── devtools.tsx
│ ├── query-client.ts
│ └── router.ts
│
│
├── features/ # قابلیت‌های مستقل بیزینسی
│ ├── auth/
│ | ├── compoenents/
│ | ├── hooks/
│ | ├── routes/
│ | | ├── index.ts
│ | | ├── LoginPage.tsx
│ | | ├── RegisterPage.tsx
│ └── blog/
│ └── dashboard/
│ | ├── dashboard-summary/
│ | | ├── api/
│ | | | ├── dashboard-summary.query.ts
│ | | ├── model/
│ | | | ├── dashboard-summary.schema.ts
│ | | ├── ui/
│ | | | ├── metric-card.tsx
│ | ├── routes/
│ | | ├── DashboardPage.tsx
│ | | ├── index.ts
│ └── errors/
│ | ├── index.ts
│ | ├── NotFoundPage.tsx
│ └── info/
│ | ├── index.ts
│ | ├── AboutPage.tsx
│ | ├── ContactPage.tsx
│ | ├── PricingPage.tsx
│ └── landing/
│ | ├── components/
│ | ├── hooks/
│ | ├── routes/
│ | | ├── index.ts
│ | | ├── LandingPage.tsx
│ | ├── services/
│ └── profile/
│ └── settings/
│ | ├── index.ts
│ | ├── SettingsPage.tsx
│ └── theme-toggle/
│ | ├── ui/
│ | | ├── theme-toggle.tsx
│ | ├── index.ts
│
└── shared/ # کدهای عمومی و مستقل از بیزینس
│ | ├── api/
│ | | ├── http-client.ts
│ | ├── compoenents/
│ | ├── hooks/
│ | ├── lib/
│ | | ├── cn.ts
│ | | ├── format-number.ts
├── assets/
├── routesTree.gen.ts
├── vite-env.ts
└── tests/
