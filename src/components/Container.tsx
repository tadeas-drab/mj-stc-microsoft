import classNames from 'classnames';

interface ContainerProps {
  as?: React.ElementType;
  children: React.ReactNode;
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
        'container mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
    />
  );
};

export default Container;
