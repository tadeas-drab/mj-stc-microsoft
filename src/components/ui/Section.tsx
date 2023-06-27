import type { ElementType, ReactNode } from 'react';
import Container from './Container';
import classNames from 'classnames';

interface SectionProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({
  as: Component = 'section',
  className,
  children,
  id,
}: SectionProps) => {
  return (
    <Component id={id} className={classNames('scroll-m-12', className)}>
      <Container className="py-12">{children}</Container>
    </Component>
  );
};

export default Section;
