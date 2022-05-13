import { MailIcon } from '@fluentui/react-icons-mdl2';
import LinkedInLogoIcon from '../icons/LinkedInLogoIcon';

import ContactCard from '../cards/ContactCard';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

const contact = [
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

const Contact = () => {
  return (
    <Section id="kontakt" className="bg-extra-dark-gray">
      <h2 className="mb-2 text-xl font-semibold text-white">Kontakt</h2>
      <p className="mb-5 leading-relaxed text-white sm:max-w-md lg:max-w-full">
        V prípade akýchkoľvek nejasností či otázok nás neváhaj kontaktovať.
        Radi zodpovieme všetky tvoje otázky.
      </p>
      <Button
        href="mailto:info@stcmicrosoft.sk"
        title="Napíšte nám správu!"
        variant="contact-solid"
        fullWidth={true}
      >
        <Icon icon={MailIcon} className="mr-2" />
        info@stcmicrosoft.sk
      </Button>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {contact.map(({ name, ...props }) => (
          <ContactCard {...props} key={name} name={name} />
        ))}
      </div>
    </Section>
  );
};

export default Contact;
