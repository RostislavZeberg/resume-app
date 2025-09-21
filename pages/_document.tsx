import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Фавикон */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Мета-теги */}
        <meta name="theme-color" content="#2c3e50" />
        <meta name="description" content="Резюме фронтенд-разработчика React с 5+ годами опыта. Специализация: React, TypeScript, Next.js, Redux Toolkit." />
        <meta name="keywords" content="React, TypeScript, Next.js, фронтенд-разработчик, резюме" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}