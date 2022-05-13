import type {
  NextPage,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { fetchQuotes } from '../utils';
import LearnMoreLink from '../components/ui/LearnMoreLink';
import Registration from '../components/sections/Registration';
import Contact from '../components/sections/Contact';
import Quotes from '../components/sections/Quotes';
import About from '../components/sections/About';
import Hero from '../components/ui/Hero';
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
      <Hero
        type="large"
        backgroundPosition="top"
        backgroundImage={{
          alt: 'Naštartuj svoju kariéru!',
          src: '/images/hero.webp',
        }}
      >
        <h1 className="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
          <span className="block">Naštartuj</span>{' '}
          <span className="block">svoju kariéru!</span>
        </h1>
        <LearnMoreLink href="/#oPrograme" color="white">
          Prečítať si viac
        </LearnMoreLink>
      </Hero>
      <About />
      <Quotes quotes={quotes} />
      <Registration opened={false} />
      <Contact />
    </>
  );
};

export default Home;
