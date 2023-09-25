import { FacebookLogoIcon, GlobeIcon } from '@fluentui/react-icons-mdl2';
import InstagramLogoIcon from '../icons/InstagramLogoIcon';
import LinkedInLogoIcon from '../icons/LinkedInLogoIcon';
import YouTubeLogoIcon from '../icons/YouTubeLogoIcon';

import FooterLink from '../ui/Footer/FooterLink';
import Section from '../ui/Section';
import Icon from '../ui/Icon';
import BlogLogoIcon from '../icons/BlogLogoIcon';

const references = [
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
      {
        name: 'Blog',
        href: 'https://blog.stcmicrosoft.sk/',
        icon: BlogLogoIcon,
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
];

const References = () => {
  return (
    <Section className="bg-white">
      <div className="-my-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {references.map(({ title, links }) => (
          <div key={title}>
            <h5 className="mb-2 whitespace-nowrap text-md font-semibold tracking-tight text-black">
              {title}
            </h5>
            <ul>
              {links.map(({ name, href, icon }) => (
                <li key={name}>
                  <FooterLink
                    className="h-9 w-full sm:w-auto"
                    rel="noreferrer nofollow noopener"
                    target="_blank"
                    href={href}
                    as="link"
                  >
                    <Icon
                      className="mr-2 text-lg text-medium-gray"
                      icon={icon}
                    />

                    {name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default References;
