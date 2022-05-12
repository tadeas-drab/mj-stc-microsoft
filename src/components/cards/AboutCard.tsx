import Image from 'next/image';

interface AboutCardProps {
  children: React.ReactNode;
  image?: { src: string; alt: string };
  title?: string;
}

const AboutCard = ({ children, image, title }: AboutCardProps) => {
  return (
    <article className="rounded-md bg-extra-light-gray p-5">
      <div className="sm:flex sm:flex-row sm:items-center sm:gap-x-4 sm:gap-y-2">
        {image && (
          <div className="relative order-1 float-right mt-2 ml-4 h-16 w-16 flex-shrink-0 sm:h-28 sm:w-28">
            <Image
              objectFit="contain"
              src={image.src}
              alt={image.alt}
              layout="fill"
            />
          </div>
        )}
        <div className="inline flex-grow space-y-2 text-black">
          {title && <h3 className="text-md font-semibold">{title}</h3>}
          <p className="leading-relaxed">{children}</p>
        </div>
      </div>
    </article>
  );
};

export default AboutCard;
