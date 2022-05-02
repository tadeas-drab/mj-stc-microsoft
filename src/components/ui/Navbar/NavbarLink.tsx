import Anchor, { AnchorProps } from '../Anchor';
import classNames from 'classnames';

const NavbarLink = ({ className, ...props }: AnchorProps) => {
  return (
    <Anchor
      {...props}
      className={classNames(
        'inline-flex h-10 items-center px-2 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-black active:outline-dashed active:outline-1 active:outline-black',
        className
      )}
    />
  );
};

export default NavbarLink;
