import type { ISvgIconProps } from '@fluentui/react-icons-mdl2';
import type { SvgIcon } from '../../types';

interface IconProps extends ISvgIconProps {
  screenReaderLabel?: string;
  icon: SvgIcon;
}

const Icon = ({
  'aria-hidden': hidden = true,
  screenReaderLabel,
  icon: IconComponent,
  ...props
}: IconProps) => {
  return (
    <>
      {screenReaderLabel && (
        <span className="sr-only">{screenReaderLabel}</span>
      )}
      <IconComponent {...props} aria-hidden={hidden} />
    </>
  );
};

export default Icon;
