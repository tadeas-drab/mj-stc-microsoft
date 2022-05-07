import { footer } from '../../../config';
import FooterLink from './FooterLink';
import Container from '../Container';

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <Container className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
        {footer.map(({ title, links }) => (
          <div key={title}>
            <h5 className="mb-2 whitespace-nowrap text-md font-semibold tracking-tight text-black">
              {title}
            </h5>
            <ul>
              {links.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <FooterLink
                    className="h-9 w-full sm:w-auto"
                    rel="noreferrer nofollow"
                    target="_blank"
                    href={href}
                  >
                    <Icon
                      className="mr-2 text-lg text-medium-gray"
                      aria-hidden
                    />
                    {name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t bg-extra-light-gray py-5">
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
