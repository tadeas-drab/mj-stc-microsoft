import type { SvgIcon } from '../../types';
import Button from '../ui/Button';
import Image from 'next/image';
import Icon from '../ui/Icon';

interface ContactCardProps {
  name: string;
  image: string;
  description: string;
  position: string;
  socials: {
    name: string;
    href: string;
    icon: SvgIcon;
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
    <article className="flex space-x-5 rounded-lg bg-dark-gray bg-opacity-50 p-5 shadow-lg">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-[5px] border-medium-gray border-opacity-50 shadow-inner sm:h-32 sm:w-32">
        <Image
          objectFit="contain"
          layout="fill"
          title={name}
          src={image}
          alt={name}
        />
      </div>
      <div className="relative flex-grow">
        <h3 className="text-md font-semibold text-white sm:mb-1 sm:text-lg">
          {name}
        </h3>
        <p className="relative mb-4 text-gray after:absolute after:left-0 after:-bottom-2.5 after:h-[2px] after:w-16 after:rounded after:bg-medium-gray">
          {description}
        </p>
        <p className="mb-4 text-white">{position}</p>
        <div className="mb-1 flex space-x-2">
          {socials.map(({ name, href, icon }) => (
            <Button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-extra-light-gray text-sm transition-colors hover:bg-tertiary focus:outline-none"
              rel="noreferrer nofollow noopener"
              target="_blank"
              title={name}
              href={href}
              key={name}
              as="link"
            >
              <Icon icon={icon} screenReaderLabel={name} />
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ContactCard;
