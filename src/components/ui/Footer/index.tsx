import FooterMenu from './FooterMenu';
import FooterLink from './FooterLink';
import Container from '../Container';

const Footer = () => {
  return (
    <footer>
      <FooterMenu />
      <div className="bg-extra-light-gray py-5">
        <Container className="text-center text-sm text-black sm:text-left">
          &copy; Copyright{' '}
          <FooterLink href="/" className="font-semibold">
            Študentské Trénerské Centrum Microsoft
          </FooterLink>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
