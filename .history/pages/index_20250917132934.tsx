import Head from 'next/head';
import { NextPage } from 'next';
import Contacts from '../components/Sections/Contacts';
import Skills from '../components/Sections/Skills';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Header from '../components/Layout/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Фронтенд-разработчик React | Резюме</title>
        <meta name="description" content="Резюме фронтенд-разработчика React с 5+ годами опыта. Специализация: React, TypeScript, Next.js, Redux Toolkit." />
        <meta name="keywords" content="React, TypeScript, Next.js, фронтенд-разработчик, резюме" />
        <meta property="og:title" content="Фронтенд-разработчик React" />
        <meta property="og:description" content="Резюме фронтенд-разработчика React с 5+ годами опыта" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Contacts />
        <Skills />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default Home;