This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Форма контактов

Форма «Отправить сообщение» отправляет письма через [Resend](https://resend.com).

### Настройка

1. Зарегистрируйтесь на [resend.com](https://resend.com) и создайте API ключ
2. Скопируйте `.env.example` в `.env.local`
3. Добавьте в `.env.local`:
   ```
   RESEND_API_KEY=re_ваш_ключ
   CONTACT_EMAIL=email@example.com  # куда приходят сообщения
   ```

Для production верифицируйте домен на [resend.com/domains](https://resend.com/domains) и укажите `RESEND_FROM` с вашим доменом.

## Автодеплой на свой сервер (GitHub Actions)

При каждом `git push` в ветку `main` проект автоматически собирается и заливается на сервер.

### Подготовка сервера

1. Установи Node.js 20+ и PM2: `npm install -g pm2`
2. Создай папку: `mkdir -p /var/www/portfolio`
3. Создай `.env` в этой папке с переменными: `RESEND_API_KEY`, `CONTACT_EMAIL`, `RESEND_FROM`
4. Сгенерируй SSH-ключ для деплоя (или используй существующий)

### Секреты в GitHub

В репозитории: **Settings → Secrets and variables → Actions** добавь:

| Секрет | Описание |
|--------|----------|
| `SSH_PRIVATE_KEY` | Приватный SSH-ключ (содержимое `id_rsa`) |
| `SERVER_HOST` | IP или домен сервера |
| `SERVER_USER` | Пользователь SSH (например, `root` или `deploy`) |
| `REMOTE_PATH` | Путь на сервере (например, `/var/www/portfolio`) |

### Первый деплой

При первом push в `main` workflow загрузит файлы и запустит приложение через PM2. Дальнейшие push будут автоматически обновлять сайт.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
