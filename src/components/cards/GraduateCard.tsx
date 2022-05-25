import type { Graduate } from '../../types';

import { GlobeIcon } from '@fluentui/react-icons-mdl2';
import InstagramLogoIcon from '../icons/InstagramLogoIcon';
import LinkedInLogoIcon from '../icons/LinkedInLogoIcon';

import mlsaLogo from '../../../public/images/logo/mlsa.png';
import Button from '../ui/Button';
import Image from 'next/image';
import Icon from '../ui/Icon';

const GraduateCard = ({
  graduateName,
  graduationYear,
  graduationTheme,
  graduateSocials,
  isAmbassador,
}: Omit<Graduate, 'id' | 'graduateOrder'>) => {
  const socials: {
    [key: string]: string;
  } = JSON.parse(graduateSocials);

  return (
    <article className="flex space-x-4 rounded-md bg-extra-light-gray p-4">
      <div className="relative flex h-full flex-grow flex-col">
        <h3 className="text-sm font-semibold text-black">
          {graduateName}
        </h3>
        <p className="mb-1 text-xs leading-relaxed text-dark-gray">
          {graduationYear} | {graduationTheme}
        </p>
        <ul className="-mx-1 mt-auto flex">
          {Object.entries(socials).map(
            ([social, href]) =>
              href && (
                <li key={social}>
                  <Button
                    className="group p-1 focus:outline-none"
                    rel="noreferrer nofollow noopener"
                    target="_blank"
                    title={social}
                    href={href}
                    as="link"
                  >
                    <Icon
                      className="text-medium-gray group-hover:text-black group-focus-visible:text-black"
                      screenReaderLabel={social}
                      icon={
                        social === 'linkedin'
                          ? LinkedInLogoIcon
                          : social === 'instagram'
                          ? InstagramLogoIcon
                          : GlobeIcon
                      }
                    />
                  </Button>
                </li>
              )
          )}
        </ul>
      </div>
      {!!isAmbassador && (
        <div className="h-10 w-10 flex-shrink-0">
          <Image
            alt="Microsoft Learn Student Ambassadors logo"
            layout="responsive"
            objectFit="contain"
            placeholder="blur"
            src={mlsaLogo}
            height={50}
            width={50}
          />
        </div>
      )}
    </article>
  );
};

export default GraduateCard;
