import type { NextPage } from 'next';
import Contact from '../components/sections/Contact';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ŠTC Microsoft</title>
        <meta name="description" content="ŠTC Microsoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
};

export default Home;
