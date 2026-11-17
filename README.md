# Василина продажен — Интернет-магазин уходовой косметики

Готовый React + Vite проект для деплоя на **Cloudflare Pages**.

## Структура проекта
- `package.json` — зависимости и скрипты сборки
- `vite.config.js` — конфигурация сборщика Vite
- `tailwind.config.js` & `postcss.config.js` — стили Tailwind CSS
- `index.html` — точка входа HTML
- `public/_redirects` — правило маршрутизации для Cloudflare Pages
- `src/main.jsx` — инициализация React
- `src/App.jsx` — весь функционал магазина (каталог, фильтры, корзина, оплата, отзывы)
- `src/index.css` — базовые стили и анимации

## Как задеплоить на Cloudflare Pages
1. Распакуйте архив и загрузите все файлы в ваш репозиторий на **GitHub**.
2. Откройте панель **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
3. Выберите репозиторий и укажите настройки сборки:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Нажмите **Save and Deploy**.
