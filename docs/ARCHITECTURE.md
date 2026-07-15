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
