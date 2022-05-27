import { NextSeo } from 'next-seo';
import heroImage from '../../public/images/hero/registration.webp';
import References from '../components/sections/References';
import Contact from '../components/sections/Contact';
import BaseCard from '../components/cards/BaseCard';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';

const Registracia = () => {
  return (
    <>
      <NextSeo title="Registrácia" />
      <Hero
        imageSrc={heroImage}
        imageAlt="Registrácia do programu"
        backgroundPosition="top"
        large={false}
      >
        <h1 className="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
          <span className="block">Registrácia</span>{' '}
          <span className="block">do programu</span>
        </h1>
      </Hero>
      <Section className="bg-white" as="div">
        <div className="-my-6">
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
        </div>
      </Section>
      <Contact />
      <References />
    </>
  );
};

export default Registracia;
