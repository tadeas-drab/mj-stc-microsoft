import type { SvgIcon } from '../../types';

interface IconProps {
  className?: string;
  screenReaderLabel?: string;
  icon: SvgIcon;
}

const Icon = ({
  className,
  screenReaderLabel,
  icon: IconComponent,
}: IconProps) => {
  return (
    <>
      {screenReaderLabel && (
        <span className="sr-only">{screenReaderLabel}</span>
      )}
      <IconComponent className={className} aria-hidden />
    </>
  );
};

export default Icon;
