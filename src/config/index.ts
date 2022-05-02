import {
  MailIcon,
  GlobeIcon,
  FacebookLogoIcon,
} from '@fluentui/react-icons-mdl2';

import InstagramLogoIcon from '../components/icons/InstagramLogoIcon';
import LinkedInLogoIcon from '../components/icons/LinkedInLogoIcon';
import YouTubeLogoIcon from '../components/icons/YouTubeLogoIcon';

export const navigation = [
  { name: 'O programe', href: '/#o-programe' },
  { name: 'Študenti', href: '/studenti' },
  { name: 'Absolventi', href: '/absolventi' },
  { name: 'Kontakt', href: '/#kontakt' },
];

export const contact = [
  {
    name: 'Zuzana Molčanová',
    image: '/images/zuzana-molcanova.jpeg',
    description: 'Education Industry Executive',
    position: 'Microsoft',
    socials: [
      {
        name: 'E-mail',
        href: 'mailto:zuzana.molcanova@microsoft.com',
        icon: MailIcon,
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/zuzanamol/',
        icon: LinkedInLogoIcon,
      },
    ],
  },
  {
    name: 'Tomáš Odráška',
    image: '/images/tomas-odraska.jpeg',
    description: 'Surface Commercial Product Marketing Manager',
    position: 'Microsoft',
    socials: [
      {
        name: 'E-mail',
        href: 'mailto:a-todraska@microsoft.com',
        icon: MailIcon,
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/tomas-odraska/',
        icon: LinkedInLogoIcon,
      },
    ],
  },
];

export const footer = [
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
