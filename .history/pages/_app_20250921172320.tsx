import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2c3e50" />
        <meta name="description" content="Резюме фронтенд-разработчика React с 5+ годами опыта. Специализация: React, TypeScript, Next.js, Redux Toolkit." />
        <meta name="keywords" content="React, TypeScript, Next.js, фронтенд-разработчик, резюме" />
        <meta property="og:title" content="Фронтенд-разработчик React" />
        <meta property="og:description" content="Резюме фронтенд-разработчика React с 5+ годами опыта" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;