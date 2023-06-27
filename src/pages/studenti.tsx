import type { InferGetStaticPropsType } from 'next';
import type { BaseStudent, Student } from '../types';

import { fetchStudent, fetchStudents } from '../utils';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import heroImage from '../../public/images/hero/students.webp';
import StudentModal from '../components/sections/StudentModal';
import StudentCard from '../components/cards/StudentCard';
import Section from '../components/ui/Section';
import Hero from '../components/ui/Hero';

export const getStaticProps = async () => {
  return {
    props: { students: await fetchStudents() },
    revalidate: 3600, // 1 hour to re-generate the page.
  };
};

const Studenti = ({
  students,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Opens the modal with the given student.
   * @param id The given student's ID.
   */
  const openModal = (id: BaseStudent['id']) => {
    fetchStudent(id).then((student) => setStudent(student));

    setStudent(null);
    setIsModalOpen(true);
  };

  return (
    <>
      <NextSeo title="Študenti" />
      <Hero
        imageAlt="Študenti programu"
        imageSrc={heroImage}
        large={false}
      >
        <h1 className="mb-4 text-xl font-semibold text-white md:mb-6 md:text-2xl">
          <span className="block">Študenti</span>{' '}
          <span className="block">programu</span>
        </h1>
      </Hero>
      <Section className="bg-white" as="div">
        <ul className="-my-4">
          {students.map(({ year, students }) => (
            <li key={year} className="flex w-full space-x-2">
              <div className="w-14 flex-shrink-0 leading-none">
                <span className="text-black">{year}</span>
              </div>
              <div className="relative grid w-full gap-6 border-l-2 pb-8 pl-8 after:absolute after:-left-[11px] after:-top-0 after:block after:h-5 after:w-5 after:rounded-full after:border-[5px] after:border-primary after:bg-white md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {students.map(({ id, stcName }) => (
                  <StudentCard
                    onClick={openModal}
                    stcName={stcName}
                    key={id}
                    id={id}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <StudentModal
        onClose={() => setIsModalOpen(false)}
        show={isModalOpen}
        student={student}
      />
    </>
  );
};

export default Studenti;
