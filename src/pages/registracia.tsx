import { NextSeo } from 'next-seo';
import heroImage from '../../public/images/hero/registration.webp';
import References from '../components/sections/References';
import Contact from '../components/sections/Contact';
import BaseCard from '../components/cards/BaseCard';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const Registracia = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-JTMTQ07LEC' });
  }, []);
  return (
    <>
      <NextSeo title="Registrácia" />
      <Hero
        imageAlt="Registrácia do programu"
        imageSrc={heroImage}
        large={false}
      >
        <h1 className="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
          <span className="block">Registrácia</span>{' '}
          <span className="block">do programu</span>
        </h1>
      </Hero>
      <Section className="bg-white" as="div">
        <div className="my-6">
          <BaseCard>
            <p className="mb-4 leading-relaxed text-black">
              Registráciu do programu Študentské Trénerské Centrum Microsoft organizuje komunita Microsoft Learn Student
              Ambassadors Slovensko. Údaje sú spracovávané pomocou formulára Microsoft Forms patriacemu kontu v komunite
              Student Ambassadors Slovensko. Plné znenie spracovania osobných údajov nájdete na konci formulára.
            </p>
            <p className="leading-relaxed text-black">
              V prípade nefunkčnosti formulára, <strong><a href="https://forms.office.com/r/WFtNsJs9ik" target="_blank">klikni sem</a></strong> pre jeho vyplnenie v novom okne.
            </p>
          </BaseCard>
        </div>
        <div className="my-6">
          <iframe className='w-full' height="1024px" src="https://forms.office.com/r/WFtNsJs9ik?embed=true" frameBorder={0} marginWidth={0} marginHeight={0}
            style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }} allowFullScreen> </iframe>
        </div>
      </Section>
      <Contact />
      <References />
    </>
  );
};

export default Registracia;

/*
          <BaseCard>
            <p className="mb-4 leading-relaxed text-black">
              Ďakujeme za tvoj prejavený záujem registrovať sa do programu
              ŠTC. Bohužiaľ, momentálne je registrácia zatvorená. Ale
              nezúfaj, v septembri 2022 otvárame registráciu pre ďalší
              ročník. Ak chceš zostať v obraze, sleduj naše sociálne siete,
              ktoré nájdeš nižšie.
            </p>
            <p className="leading-relaxed text-black">
              Ak by si mal akékoľvek otázky, neváhaj nás kontaktovať
              nižšie.
            </p>
          </BaseCard>
*/
