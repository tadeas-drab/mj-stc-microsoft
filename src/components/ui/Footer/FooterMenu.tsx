import { footer } from '../../../config';
import FooterLink from './FooterLink';
import Container from '../Container';

const FooterMenu = () => {
  return (
    <div className="border-y bg-white">
      <Container className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
        {footer.map(({ title, links }) => (
          <div key={title}>
            <h5 className="whitespace-nowrap text-md font-semibold tracking-tight">
              {title}
            </h5>
            <ul className="mt-2">
              {links.map(({ name, href, icon }) => (
                <li key={name}>
                  <FooterLink
                    className="h-9 w-full sm:w-auto"
                    rel="noreferrer"
                    href={href}
                    icon={icon}
                  >
                    {name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default FooterMenu;
