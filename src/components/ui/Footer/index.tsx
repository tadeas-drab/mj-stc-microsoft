import { GlobeIcon, FacebookLogoIcon } from '@fluentui/react-icons-mdl2';
import InstagramLogoIcon from '../../icons/InstagramLogoIcon';
import LinkedInLogoIcon from '../../icons/LinkedInLogoIcon';
import YouTubeLogoIcon from '../../icons/YouTubeLogoIcon';

import FooterLink from './FooterLink';
import Container from '../Container';
import Icon from '../Icon';

const footer = [
  {
    title: 'Študentské Trénerské Centrum',
    links: [
      {
        name: 'Študentské Trénerské Centrum',
        href: 'https://stcmicrosoft.sk/',
        icon: GlobeIcon,
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/stcmicrosoft/',
        icon: LinkedInLogoIcon,
      },
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/stcmicrosoft/',
        icon: FacebookLogoIcon,
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/stcmicrosoft/',
        icon: InstagramLogoIcon,
      },
    ],
  },
  {
    title: 'Vzdelávame pre budúcnosť',
    links: [
      {
        name: 'Vzdelávame pre budúcnosť',
        href: 'http://vzdelavameprebuducnost.sk/',
        icon: GlobeIcon,
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/vzdelavame/',
        icon: LinkedInLogoIcon,
      },
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/vzdelavameprebuducnost/',
        icon: FacebookLogoIcon,
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/vzdelavame/',
        icon: InstagramLogoIcon,
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/c/Vzdelavame',
        icon: YouTubeLogoIcon,
      },
    ],
  },
  {
    title: 'Microsoft Learn Student Ambassadors',
    links: [
      {
        name: 'Student Ambassadors Slovensko',
        href: 'https://studentambassadors.sk/',
        icon: GlobeIcon,
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/groups/12467142/',
        icon: LinkedInLogoIcon,
      },
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/studentambassadorsslovensko/',
        icon: FacebookLogoIcon,
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/studentambassadorsslovensko/',
        icon: InstagramLogoIcon,
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/channel/UCYWW4gMa5LoA75FdLdBOJJA',
        icon: YouTubeLogoIcon,
      },
    ],
  },
];

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
              {links.map(({ name, href, icon }) => (
                <li key={name}>
                  <FooterLink
                    className="h-9 w-full sm:w-auto"
                    rel="noreferrer nofollow"
                    target="_blank"
                    href={href}
                  >
                    <Icon
                      icon={icon}
                      className="mr-2 text-lg text-medium-gray"
                    />

                    {name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
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
