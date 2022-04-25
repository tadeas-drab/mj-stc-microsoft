import Anchor, { AnchorProps } from './Anchor';
import classNames from 'classnames';

const types = {
  default:
    'bg-primary text-white active:text-tertiary hover:bg-secondary focus-visible:ring-white focus-visible:ring-offset-primary hover:focus-visible:ring-offset-secondary',
  outline:
    'bg-transparent text-primary active:text-tertiary hover:bg-primary hover:focus-visible:ring-offset-primary focus-visible:ring-primary hover:text-white hover:focus-visible:ring-white',
};

interface ButtonProps extends AnchorProps {
  type?: keyof typeof types;
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
        fullWidth ? 'block w-full' : 'inline-block',
        'px-4 py-1.5 text-sm text-center font-semibold border border-primary focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-offset-2 focus:outline-none rounded',
        types[type],
        className
      )}
    />
  );
};

export default Button;
