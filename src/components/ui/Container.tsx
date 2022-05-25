import type { ElementType, ReactNode } from 'react';
import classNames from 'classnames';

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const Container = ({
  as: Component = 'div',
  className,
  ...props
}: ContainerProps) => {
  return (
    <Component
      {...props}
      className={classNames(
        'container mx-auto px-5 sm:px-6 lg:px-8',
        className
      )}
    />
  );
};

export default Container;
