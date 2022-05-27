import type { ReactNode } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

interface BaseCardProps {
  image?: { src: string; alt: string };
  children: ReactNode;
  className?: string;
  title?: string;
}

const BaseCard = ({
  image,
  children,
  className,
  title,
}: BaseCardProps) => {
  return (
    <div
      className={classNames(
        'rounded-md bg-extra-light-gray p-5',
        className
      )}
    >
      <div className="sm:flex sm:flex-row sm:items-center sm:gap-x-4 sm:gap-y-2">
        {image && (
          <div className="relative order-1 float-right mt-2 ml-4 h-16 w-16 flex-shrink-0 sm:h-28 sm:w-28">
            <Image
              objectFit="contain"
              src={image.src}
              alt={image.alt}
              title={title}
              layout="fill"
            />
          </div>
        )}
        <div className="inline flex-grow space-y-2 text-black">
          {title && <h3 className="text-md font-semibold">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
