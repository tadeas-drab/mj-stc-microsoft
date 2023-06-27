import FooterLink from './FooterLink';
import Container from '../Container';
import Icon from '../Icon';

import { GlobeIcon, FacebookLogoIcon } from '@fluentui/react-icons-mdl2';
import InstagramLogoIcon from '../../icons/InstagramLogoIcon';
import LinkedInLogoIcon from '../../icons/LinkedInLogoIcon';
import YouTubeLogoIcon from '../../icons/YouTubeLogoIcon';

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
    ],
  },
];

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
