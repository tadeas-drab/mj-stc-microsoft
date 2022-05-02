import Container from './Container';
import classNames from 'classnames';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={classNames('scroll-m-10', className)}>
      <Container className="py-10">{children}</Container>
    </section>
  );
};

export default Section;
