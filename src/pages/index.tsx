import type { NextPage, GetStaticProps } from 'next';
import type { Quote } from '../types';
import { fetchQuotes } from '../utils';

import heroImage from '../../public/images/hero/home.webp';
import aboutImage from '../../public/images/about.webp';
import Image from 'next/image';

import LearnMoreLink from '../components/ui/LearnMoreLink';
import CheckList from '../components/ui/CheckList';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';

import AboutCard from '../components/cards/AboutCard';
import Registration from '../components/sections/Registration';
import Contact from '../components/sections/Contact';

import TrimesterCarousel from '../components/carousels/TrimesterCarousel';
import QuoteCarousel from '../components/carousels/QuoteCarousel';

interface HomeProps {
  quotes: Quote[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { quotes: await fetchQuotes() } };
};

const Home: NextPage<HomeProps> = ({ quotes }) => {
  return (
    <>
      <Hero
        imageSrc={heroImage}
        imageAlt="Naštartuj svoju kariéru!"
        backgroundPosition="top"
        large={true}
      >
        <h1 className="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
          <span className="block">Naštartuj</span>{' '}
          <span className="block">svoju kariéru!</span>
        </h1>
        <LearnMoreLink href="/#oPrograme" color="white">
          Prečítať si viac
        </LearnMoreLink>
      </Hero>
      <Section id="oPrograme" className="bg-white">
        <div className="grid grid-cols-2 items-center gap-12">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="mb-6 text-xl font-semibold text-black">
              O programe
            </h2>
            <div className="mb-6 space-y-4">
              <p className="leading-relaxed text-black">
                Študentské Trénerské Centrum (ŠTC) je program najmä pre
                stredoškolských študentov, ktorí sa chcú zdokonaľovať v
                oblasti informačných technológií a majú záujem poskytovať
                svoje nadobudnuté znalosti ďalším.
              </p>
              <p className="leading-relaxed text-black">
                Študentské Trénerské Centrum (ŠTC) je program najmä pre
                stredoškolských študentov, ktorí sa chcú zdokonaľovať v
                oblasti informačných technológií a majú záujem poskytovať
                svoje nadobudnuté znalosti ďalším.
              </p>
              <p className="leading-relaxed text-black">
                Organizátorom aktivity je spoločnosť Microsoft, ktorá
                pripravuje študentov na zaujímavú pracovnú kariéru a na trh
                práce. Cieľom celého programu je pripraviť študentov v
                oblasti lektorskej činnosti, technológií Microsoft 365,
                programovania, IoT a správy zariadení tak, aby ich ďalšia
                cesta napomohla k postupu medzi elitných študentov
                Microsoft Learn Student Ambassadors.
              </p>
            </div>
            <CheckList
              items={[
                'Základy technologických riešení spoločnosti Microsoft',
                'Soft skills, komunikácia a podanie spätnej väzby',
                'Rôzne školenia, workshopy, eventy a špecialisti',
              ]}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Image
              src={aboutImage}
              alt="O programe Microsoft ŠTC"
              objectFit="contain"
              layout="responsive"
              placeholder="blur"
              height={600}
              width={700}
            />
          </div>
        </div>
        <div className="mt-8 mb-10">
          <TrimesterCarousel />
        </div>
        <div className="grid grid-cols-2 items-center gap-5">
          <AboutCard
            title="Letná škola"
            className="col-span-2 xl:col-span-1"
            image={{
              src: '/images/summer-school.webp',
              alt: 'Letná škola',
            }}
          >
            Každý rok cez leto organizujeme niekoľkodňové stretnutie
            študentov v podode Letnej školy, kde majú zabezpečený program
            od špeciálnych hostí či zamestnancov spoločnosti Microsoft.
            Zároveň študenti tvoria svoj unikátny projekt, ktorý na záver
            Letnej školy odprezentujú porote.
          </AboutCard>
          <AboutCard
            title="Microsoft Learn Student Ambassadors"
            className="col-span-2 xl:col-span-1"
            image={{
              src: '/images/logo/mlsa.png',
              alt: 'Microsoft Learn Student Ambassadors logo',
            }}
          >
            V spolupráci so spoločnosťou Microsoft môžu študenti zostať i
            naďalej a môžu postúpiť do programu určeného predovšetkým pre
            vysokoškolákov - Microsoft Learn Student Ambassadors. Tento
            program im pomôže pri zviditeľnení mena a získaní ďalšej praxe.
          </AboutCard>
        </div>
      </Section>
      <Section id="citaty" className="bg-primary">
        <h2 className="mb-8 -mt-4 text-center text-xl font-semibold text-white">
          Citáty
        </h2>
        <QuoteCarousel quotes={quotes} />
      </Section>
      <Registration />
      <Contact />
    </>
  );
};

export default Home;
