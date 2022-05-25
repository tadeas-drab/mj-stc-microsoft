import { ChevronRightMedIcon } from '@fluentui/react-icons-mdl2';
import type { AnchorHTMLAttributes } from 'react';
import type { LinkProps } from 'next/link';

import classNames from 'classnames';
import Button from './Button';
import Icon from './Icon';

type LearnMoreLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  color?: 'primary' | 'white';
  href: LinkProps['href'];
};

const LearnMoreLink = ({
  color = 'primary',
  className,
  children,
  href,
  ...props
}: LearnMoreLinkProps) => {
  return (
    <Button
      as="link"
      {...props}
      href={href}
      className={classNames(
        className,
        'group inline-flex items-center hover:underline focus:outline-none focus-visible:underline active:underline',
        {
          'text-primary decoration-primary': color === 'primary',
          'text-white decoration-white': color === 'white',
        }
      )}
    >
      {children}
      <Icon
        className="ml-1 mt-1 text-sm transition-transform group-hover:translate-x-1.5 group-hover:transform group-focus-visible:translate-x-1.5 group-focus-visible:transform"
        icon={ChevronRightMedIcon}
      />
    </Button>
  );
};

export default LearnMoreLink;
