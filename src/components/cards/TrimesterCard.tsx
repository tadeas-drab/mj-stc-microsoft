import type { ReactNode } from 'react';
import Image from 'next/image';

interface TrimesterCardProps {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const TrimesterCard = ({
  children,
  imageSrc,
  imageAlt,
}: TrimesterCardProps) => {
  return (
    <div className="h-full rounded-md bg-white p-5 shadow-lg">
      <div className="grid h-full grid-cols-4 gap-12">
        <div className="col-span-5 md:col-span-3">{children}</div>
        <div className="col-span-5 mt-auto md:col-span-1 md:mt-0 md:self-center">
          <Image
            layout="responsive"
            objectFit="contain"
            src={imageSrc}
            alt={imageAlt}
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default TrimesterCard;
