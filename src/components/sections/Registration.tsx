import registrationOpened from '../../../public/images/registration-opened.webp';
import registrationClosed from '../../../public/images/registration-closed.webp';

import LearnMoreLink from '../ui/LearnMoreLink';
import Section from '../ui/Section';
import Image from 'next/image';

interface RegistrationProps {
  opened?: boolean;
}

const Registration = ({ opened }: RegistrationProps) => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-3 items-center gap-2">
        <div className="col-span-3 -my-2 sm:my-0 md:order-1 md:col-span-1 md:block">
          <Image
            src={opened ? registrationOpened : registrationClosed}
            alt={opened ? 'Registrácia otvorená' : 'Registrácia zatvorená'}
            objectFit="contain"
            placeholder="blur"
            height={300}
            width={400}
          />
        </div>
        <div className="col-span-3 md:col-span-2">
          <h2 className="mb-4 text-xl font-semibold text-black">
            <span className="block sm:inline">Zapoj sa do</span>{' '}
            <span className="block sm:inline">programu ŠTC</span>
          </h2>
          <p className="mb-6 leading-relaxed text-black sm:max-w-2xl">
            Účasťou v programe Študentské Trénerské Centrum máš možnosť
            získať obrovské príležitosti a možnosti na svoj osobný rozvoj.
            Program je len pre cieľavedomých a vytrvalých študentov, ktorí
            sa neboja výziev. Ak si myslíš, že patríš medzi nich, prihlás
            sa!
          </p>
          <LearnMoreLink
            title="Registrácia do programu ŠTC"
            href="/registracia"
          >
            Prejsť na registráciu
          </LearnMoreLink>
        </div>
      </div>
    </Section>
  );
};

export default Registration;
