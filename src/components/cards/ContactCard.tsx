import type { Icon } from '../../types';
import Anchor from '../ui/Anchor';
import Image from 'next/image';

interface ContactCardProps {
  name: string;
  image: string;
  description: string;
  position: string;
  socials: {
    name: string;
    href: string;
    icon: Icon;
  }[];
}

const ContactCard = ({
  name,
  image,
  description,
  position,
  socials,
}: ContactCardProps) => {
  return (
    <article className="flex space-x-6 rounded bg-dark-gray bg-opacity-50 p-5 shadow-lg xl:p-6">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-extra-dark-gray border-opacity-50 shadow-inner sm:h-32 sm:w-32">
        <Image src={image} alt={name} layout="fill" />
      </div>
      <div className="relative flex-grow">
        <h3 className="mb-1 text-lg font-semibold text-white">{name}</h3>
        <p className="relative mb-6 text-gray after:absolute after:left-0 after:-bottom-4 after:h-[2px] after:w-16 after:rounded after:bg-medium-gray">
          {description}
        </p>
        <p className="mb-4 text-white">{position}</p>
        <div className="mb-1 flex space-x-2">
          {socials.map(({ name, href, icon: Icon }) => (
            <Anchor
              className="flex h-8 w-8 items-center justify-center rounded-full bg-extra-light-gray text-sm transition-colors hover:bg-tertiary focus:outline-none"
              rel="noreferrer nofollow"
              target="_blank"
              href={href}
              key={name}
            >
              <span className="sr-only">{name}</span>
              <Icon aria-hidden />
            </Anchor>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ContactCard;
