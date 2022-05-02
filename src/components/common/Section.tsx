import Container from '../ui/Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
