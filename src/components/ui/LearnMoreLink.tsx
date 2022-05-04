import { ChevronRightMedIcon } from '@fluentui/react-icons-mdl2';
import Anchor, { AnchorProps } from './Anchor';
import classNames from 'classnames';

const LearnMoreLink = ({ children, className, ...props }: AnchorProps) => {
  return (
    <Anchor
      {...props}
      className={classNames(
        'group inline-flex items-center text-primary decoration-primary hover:underline focus:outline-none focus-visible:underline active:underline',
        className
      )}
    >
      {children}
      <ChevronRightMedIcon
        className="ml-1 mt-1 text-sm transition-transform group-hover:translate-x-1.5 group-hover:transform group-focus-visible:translate-x-1.5 group-focus-visible:transform"
        aria-hidden
      />
    </Anchor>
  );
};

export default LearnMoreLink;
