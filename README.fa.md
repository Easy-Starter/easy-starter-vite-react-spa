<div dir="rtl" align="right">

<div align="center">

# استارتر SPA با Vite و React

**پایه‌ای سبک و Maintainable با Vite و React برای SPAهای متصل به API، داشبورد، ابزار داخلی و اپلیکیشن Embedded.**

[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?logo=github&logoColor=white)](https://github.com/easy-starter/easy-starter-vite-react-spa/generate) [![CI](https://github.com/easy-starter/easy-starter-vite-react-spa/actions/workflows/ci.yml/badge.svg)](https://github.com/easy-starter/easy-starter-vite-react-spa/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) ![Status: foundation](https://img.shields.io/badge/status-foundation-orange) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)

[English](README.md) · [مستندات](https://github.com/easy-starter/easy-starter-docs) · [گزارش مشکل](https://github.com/easy-starter/easy-starter-vite-react-spa/issues/new/choose)

</div>

> [!IMPORTANT]
> این ریپوزیتوری در مرحله‌ی **Foundation** است. تا انتشار اولین نسخه‌ی پایدار، آن را Production-ready در نظر نگیرید. پس از انتشار `v1.0.0` این پیام را حذف و badge وضعیت را به‌روزرسانی کنید.

## چه مشکلی را حل می‌کند؟

بدون تبدیل یک اپلیکیشن کوچک Client-side به پروژه‌ای سنگین، ساختار، تست‌پذیری و کیفیت Build پروداکشن را حفظ می‌کند.

## این تمپلیت برای چه پروژه‌هایی مناسب است؟

- SPAهای متصل به API
- داشبورد داخلی و ابزار ادمین
- ویجت Embedded و ابزار تعاملی
- اپلیکیشن Static-hosted بدون Server Runtime

**مناسب این موارد نیست:** برای سایت‌های عمومی SEO-critical، اپلیکیشن Server-rendered یا منطق بک‌اند دارای Secret مناسب نیست.

## امکانات پایه

- Vite، React و TypeScript
- مرزبندی Feature-oriented پروژه
- قراردادهای Routing، فرم، API Client و Error State
- اعتبارسنجی Environment بدون افشای Secret
- تست، Lint، CI و پروفایل‌های استقرار Static

توضیحات جزئی معماری، قراردادها، پروفایل‌های استقرار و روش توسعه در [`docs/`](docs/) قرار می‌گیرند. توسعه‌ی فیچر از [`specs/`](specs/) شروع می‌شود و قوانین ایجنت‌ها در [`AGENTS.md`](AGENTS.md) نگهداری می‌شوند.

## شروع سریع

۱. روی **Use this template** بزنید یا فرمان زیر را اجرا کنید:

```bash
gh repo create my-project --template easy-starter/easy-starter-vite-react-spa --private --clone
cd my-project
```

۲. نام پروژه، متادیتای پکیج و متغیرهای محیطی را تنظیم کنید.
۳. پروژه را اجرا کنید:

```bash
cp .env.example .env.local
make setup
make dev
make check
```

۴. اولین مشخصات فیچر را در `specs/` بنویسید.
۵. فیچر را پیاده‌سازی کنید و `make check` را سبز نگه دارید.

## قرارداد همکاری

- قبل از تغییر کد، `AGENTS.md` و Spec مرتبط را بخوانید.
- پیش از افزودن Abstraction یا Dependency جدید، از الگوهای موجود استفاده کنید.
- Credential یا داده‌ی واقعی پروداکشن را Commit نکنید.
- پیش از Pull Request تمام Quality Checkهای ریپو را اجرا کنید.
- تصمیم‌های معماری را در `docs/decisions/` ثبت کنید.

## مستندات

از `docs/getting-started.md` شروع کنید. راهنمای کامل‌تر توسعه‌ی AI-first در [Easy Starter Docs](https://github.com/easy-starter/easy-starter-docs) نگهداری می‌شود.

## مشارکت و پشتیبانی

قوانین مشارکت در [`CONTRIBUTING.md`](CONTRIBUTING.md)، روش دریافت کمک در [`SUPPORT.md`](SUPPORT.md) و گزارش مسائل امنیتی در [`SECURITY.md`](SECURITY.md) قرار دارد.

## مجوز

این پروژه تحت [مجوز MIT](LICENSE) منتشر می‌شود.

</div>
