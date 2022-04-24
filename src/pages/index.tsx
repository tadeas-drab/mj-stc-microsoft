import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ŠTC Microsoft</title>
        <meta name="description" content="ŠTC Microsoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="w-full h-64 bg-gray" />
      </main>
    </div>
  );
};

export default Home;
