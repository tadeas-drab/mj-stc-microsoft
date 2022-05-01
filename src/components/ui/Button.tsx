import Anchor, { AnchorProps } from '../common/Anchor';
import classNames from 'classnames';

const types = {
  default:
    'bg-primary text-white hover:bg-secondary focus-visible:ring-white focus-visible:ring-offset-primary hover:focus-visible:ring-offset-secondary active:text-tertiary',
  outline:
    'bg-transparent text-primary hover:bg-primary hover:text-white focus-visible:ring-primary hover:focus-visible:ring-white hover:focus-visible:ring-offset-primary active:text-tertiary',
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
        'select-none rounded border border-primary px-4 py-1.5 text-center text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-offset-2',
        types[type],
        className
      )}
    />
  );
};

export default Button;
