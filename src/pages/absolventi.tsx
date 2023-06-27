import type { InferGetStaticPropsType } from 'next';
import { fetchGraduates } from '../utils';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import heroImage from '../../public/images/hero/students.webp';
import GraduatesFilter from '../components/sections/GraduatesFilter';
import GraduateCard from '../components/cards/GraduateCard';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';

export const getStaticProps = async () => {
  return {
    props: await fetchGraduates(),
    revalidate: 3600, // 1 hour to re-generate the page.
  };
};

const Absolventi = ({
  graduates,
  years,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [students, setStudents] = useState(graduates);

  return (
    <>
      <NextSeo title="Absolventi" />
      <Hero
        imageAlt="Absolventi programu"
        imageSrc={heroImage}
        large={false}
      >
        <h1 className="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
          <span className="block">Absolventi</span>{' '}
          <span className="block">programu</span>
        </h1>
      </Hero>
      <Section className="bg-white" as="div">
        <div className="-my-7">
          <GraduatesFilter
            setGraduates={setStudents}
            graduates={graduates}
            years={years}
          />
          {students.length ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {students.map(({ id, ...props }) => (
                <GraduateCard {...props} key={id} />
              ))}
            </div>
          ) : (
            <div className="py-28 text-center">
              <span className="text-black">Žiadne výsledky</span>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default Absolventi;
