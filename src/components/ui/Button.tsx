import Anchor, { AnchorProps } from './Anchor';
import classNames from 'classnames';

interface ButtonProps extends AnchorProps {
  type?: 'default' | 'outline' | 'contact';
  fullWidth?: boolean;
}

const Button = ({
  type = 'default',
  fullWidth,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Anchor
      {...props}
      className={classNames(
        'flex items-center justify-center rounded-md px-5 focus:outline-none',
        fullWidth ? 'w-full' : 'w-auto max-w-min',
        className,
        {
          'border border-primary bg-primary py-1.5 text-sm font-semibold text-white hover:bg-secondary focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary hover:focus-visible:ring-offset-secondary active:text-tertiary':
            type === 'default',
          'border border-primary bg-transparent py-1.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary focus-visible:ring-offset-2 hover:focus-visible:ring-white hover:focus-visible:ring-offset-primary active:text-tertiary':
            type === 'outline',
          'h-14 bg-dark-gray bg-opacity-50 text-md text-white shadow-lg transition-colors hover:bg-tertiary hover:text-black focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-gray hover:focus-visible:ring-black hover:focus-visible:ring-offset-tertiary':
            type === 'contact',
        }
      )}
    />
  );
};

export default Button;
