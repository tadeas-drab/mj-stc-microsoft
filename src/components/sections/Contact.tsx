import { contact } from '../../config';
import { MailIcon } from '@fluentui/react-icons-mdl2';

import ContactCard from '../cards/ContactCard';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <Section id="kontakt" className="bg-extra-dark-gray">
      <h2 className="mb-2 text-xl font-semibold text-white">Kontakt</h2>
      <p className="mb-6 leading-relaxed text-white sm:max-w-md lg:max-w-full">
        V prípade akýchkoľvek nejasností či otázok nás neváhaj kontaktovať.
        Radi zodpovieme všetky tvoje otázky.
      </p>
      <Button
        href="mailto:info@stcmicrosoft.sk"
        title="Napíšte nám správu!"
        type="contact"
        fullWidth
      >
        <MailIcon className="mr-2" aria-hidden />
        info@stcmicrosoft.sk
      </Button>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {contact.map(({ name, ...props }) => (
          <ContactCard {...props} key={name} name={name} />
        ))}
      </div>
    </Section>
  );
};

export default Contact;
