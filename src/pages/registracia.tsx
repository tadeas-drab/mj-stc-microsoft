import type { NextPage } from 'next';
import Head from 'next/head';

import AboutCard from '../components/cards/AboutCard';
import Contact from '../components/sections/Contact';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';

const Registracia: NextPage = () => {
  return (
    <>
      <Head>
        <title>Registrácia - ŠTC Microsoft</title>
        <meta name="description" content="ŠTC Microsoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        large={false}
        backgroundPosition="top"
        backgroundImage={{
          alt: 'Registrácia do programu',
          src: '/images/hero/registration.jpeg',
        }}
      >
        <h1 className="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
          <span className="block">Registrácia</span>{' '}
          <span className="block">do programu</span>
        </h1>
      </Hero>
      <Section className="bg-white">
        <AboutCard>
          <p className="mb-4 leading-relaxed text-black">
            Ďakujeme za tvoj prejavený záujem registrovať sa do programu
            ŠTC. Bohužiaľ, momentálne je registrácia zatvorená. Ale
            nezúfaj, v septembri 2022 otvárame registráciu pre ďalší
            ročník. Ak chceš zostať v obraze, sleduj naše sociálne siete,
            ktoré nájdeš nižšie.
          </p>
          <p className="leading-relaxed text-black">
            Ak by si mal akékoľvek otázky, neváhaj nás kontaktovať nižšie.
          </p>
        </AboutCard>
      </Section>
      <Contact />
    </>
  );
};

export default Registracia;
