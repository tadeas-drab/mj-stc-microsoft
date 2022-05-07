import type {
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { fetchQuotes } from '../utils';
import Registration from '../components/sections/Registration';
import Contact from '../components/sections/Contact';
import Quotes from '../components/sections/Quotes';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  return { props: { quotes: await fetchQuotes() } };
};

const Home: NextPage = ({
  quotes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>ŠTC Microsoft</title>
        <meta name="description" content="ŠTC Microsoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Quotes quotes={quotes} />
      <Registration opened={false} />
      <Contact />
    </>
  );
};

export default Home;
