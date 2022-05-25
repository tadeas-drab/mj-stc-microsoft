/* eslint-disable @typescript-eslint/no-unused-vars */

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

import Link, { LinkProps } from 'next/link';
import classNames from 'classnames';

interface BaseProps {
  variant?: 'primary-solid' | 'primary-outline' | 'contact-solid';
  fullWidth?: boolean;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button';
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: LinkProps['href'];
    as: 'link';
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = ({
  className,
  fullWidth,
  variant,
  ...props
}: ButtonProps) => {
  const rootClassName = classNames(className, {
    'w-full': fullWidth,
    'flex items-center justify-center focus:outline-none px-5': variant,
    'rounded-md border border-primary bg-primary py-1.5 text-sm font-semibold text-white hover:bg-secondary focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary hover:focus-visible:ring-offset-secondary active:text-tertiary':
      variant === 'primary-solid',
    'rounded-md border border-primary bg-transparent py-1.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary focus-visible:ring-offset-2 hover:focus-visible:ring-white hover:focus-visible:ring-offset-primary active:text-tertiary':
      variant === 'primary-outline',
    'h-14 rounded-md bg-dark-gray bg-opacity-50 text-md text-white shadow-lg transition-colors hover:bg-tertiary hover:text-black focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-gray hover:focus-visible:ring-black hover:focus-visible:ring-offset-tertiary':
      variant === 'contact-solid',
  });

  if (props.as === 'link') {
    const { as: _, href, ...rest } = props;

    return (
      <Link href={href} passHref={true}>
        <a className={rootClassName} {...rest} />
      </Link>
    );
  }

  const { as: _, ...rest } = props;
  return <button className={rootClassName} {...rest} />;
};

export default Button;
