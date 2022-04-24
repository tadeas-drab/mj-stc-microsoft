import Anchor, { AnchorProps } from '../Anchor';
import classNames from 'classnames';

interface NavbarLinkProps extends AnchorProps {
  fullWidth?: boolean;
}

const NavbarLink = ({
  fullWidth,
  className,
  ...props
}: NavbarLinkProps) => {
  return (
    <Anchor
      {...props}
      className={classNames(
        { 'block w-full': fullWidth },
        'inline-flex items-center h-10 px-2 active:outline-black active:outline-1 active:outline-dashed focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-black focus:outline-none',
        className
      )}
    />
  );
};

export default NavbarLink;
