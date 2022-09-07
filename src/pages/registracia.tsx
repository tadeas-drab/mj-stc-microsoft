import { NextSeo } from 'next-seo';
import heroImage from '../../public/images/hero/registration.webp';
import References from '../components/sections/References';
import Contact from '../components/sections/Contact';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { fetchRegistration } from '../utils';
import { InferGetServerSidePropsType } from 'next';
import OpenRegistration from '../components/sections/subsections/OpenRegistration';
import ClosedRegistration from '../components/sections/subsections/ClosedRegistration';

export const getServerSideProps = async () => {
  return {
    props: { registration: await fetchRegistration() }
  };
};

const Registracia = ({ registration, }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
        {registration.isOpen == 1 ?
          <OpenRegistration link={registration.link} />
          :
          <ClosedRegistration />}
      </Section>
      <Contact />
      <References />
    </>
  );
};

export default Registracia;