import LearnMoreLink from '../ui/LearnMoreLink';
import Section from '../ui/Section';
import Image from 'next/image';

interface RegistrationProps {
  opened?: boolean;
}

const Registration = ({ opened = false }: RegistrationProps) => {
  const imageSrc = opened
    ? '/images/registration-opened.png'
    : '/images/registration-closed.png';

  const imageAlt = opened
    ? 'Registrácia otvorená'
    : 'Registrácia zatvorená';

  return (
    <Section id="registracia" className="bg-white">
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-3 md:col-span-2 md:pr-6">
          <h2 className="mb-6 text-xl font-semibold text-black">
            <span className="block sm:inline">Zapoj sa do</span>{' '}
            <span className="block sm:inline">programu ŠTC</span>
          </h2>
          <p className="mb-8 leading-relaxed text-black sm:max-w-2xl">
            Účasťou v programe Študentské Trénerské Centrum máš možnosť
            získať obrovské príležitosti a možnosti na svoj osobný rozvoj.
            Program je len pre cieľavedomých a vytrvalých študentov, ktorí
            sa neboja výziev. Ak si myslíš, že patríš medzi nich, prihlás
            sa!
          </p>
          <LearnMoreLink href="/registracia">
            Prejsť na registráciu
          </LearnMoreLink>
        </div>
        <div className="col-span-1 hidden md:block">
          <Image
            src={imageSrc}
            alt={imageAlt}
            objectFit="contain"
            height={300}
            width={400}
          />
        </div>
      </div>
    </Section>
  );
};

export default Registration;
