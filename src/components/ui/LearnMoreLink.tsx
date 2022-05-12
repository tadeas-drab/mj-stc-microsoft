import { ChevronRightMedIcon } from '@fluentui/react-icons-mdl2';
import Anchor, { AnchorProps } from './Anchor';
import classNames from 'classnames';
import Icon from './Icon';

interface LearnMoreLinkProps extends AnchorProps {
  color?: 'primary' | 'white';
}

const LearnMoreLink = ({
  color = 'primary',
  children,
  className,
  ...props
}: LearnMoreLinkProps) => {
  return (
    <Anchor
      {...props}
      className={classNames(
        'group inline-flex items-center hover:underline focus:outline-none focus-visible:underline active:underline',
        className,
        {
          'text-primary decoration-primary': color === 'primary',
          'text-white decoration-white': color === 'white',
        }
      )}
    >
      {children}
      <Icon
        icon={ChevronRightMedIcon}
        className="ml-1 mt-1 text-sm transition-transform group-hover:translate-x-1.5 group-hover:transform group-focus-visible:translate-x-1.5 group-focus-visible:transform"
      />
    </Anchor>
  );
};

export default LearnMoreLink;
