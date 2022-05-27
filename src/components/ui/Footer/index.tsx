import FooterLink from './FooterLink';
import Container from '../Container';

const Footer = () => {
  return (
    <footer className="mt-auto bg-extra-light-gray py-5">
      <Container className="text-center text-sm text-black sm:text-left">
        &copy; Copyright{' '}
        <FooterLink href="/" className="font-semibold" as="link">
          Študentské Trénerské Centrum Microsoft
        </FooterLink>
      </Container>
    </footer>
  );
};

export default Footer;
