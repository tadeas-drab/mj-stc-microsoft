import type { ReactNode } from 'react';
import Container from './Container';
import classNames from 'classnames';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={classNames('scroll-m-12', className)}>
      <Container className="py-12">{children}</Container>
    </section>
  );
};

export default Section;
