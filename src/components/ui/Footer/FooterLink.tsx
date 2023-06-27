import Button, { ButtonProps } from '../Button';
import classNames from 'classnames';

const FooterLink = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={classNames(
        'inline-flex items-center text-extra-dark-gray decoration-black hover:text-black hover:underline focus:outline-none focus-visible:text-black focus-visible:underline active:text-black active:underline',
        className
      )}
    />
  );
};

export default FooterLink;
