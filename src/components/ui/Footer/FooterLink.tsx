import type { ISvgIconProps } from '@fluentui/react-icons-mdl2';
import Anchor, { AnchorProps } from '../../common/Anchor';
import classNames from 'classnames';

interface FooterLink extends AnchorProps {
  icon?: React.FC<React.HTMLAttributes<HTMLSpanElement> & ISvgIconProps>;
}

const FooterLink = ({
  icon: Icon,
  className,
  children,
  ...props
}: FooterLink) => {
  return (
    <Anchor
      {...props}
      className={classNames(
        'inline-flex items-center text-extra-dark-gray decoration-black hover:text-black hover:underline focus:outline-none focus-visible:text-black focus-visible:underline active:text-black active:underline',
        className
      )}
    >
      {Icon && (
        <Icon className="mr-2 text-lg text-medium-gray" aria-hidden />
      )}
      {children}
    </Anchor>
  );
};

export default FooterLink;
