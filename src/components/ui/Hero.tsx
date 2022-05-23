import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import Container from './Container';

interface HeroProps {
  backgroundPosition: 'top' | 'center';
  children: React.ReactNode;
  imageSrc: StaticImageData;
  imageAlt: string;
  large?: boolean;
}

const Hero = ({
  backgroundPosition,
  children,
  imageSrc,
  imageAlt,
  large = false,
}: HeroProps) => {
  return (
    <header
      className={classNames('relative flex min-h-[35vh] items-center', {
        'sm:min-h-[50vh] lg:min-h-[70vh]': large,
      })}
    >
      <div
        className={classNames(
          'absolute inset-0 -z-50 h-full select-none lg:fixed lg:min-h-[100vh]',
          large ? 'lg:h-[80vh]' : 'lg:h-[50vh]'
        )}
      >
        <Image
          className={classNames({
            'object-center': backgroundPosition === 'center',
            'object-top': backgroundPosition === 'top',
          })}
          placeholder="blur"
          objectFit="cover"
          priority={true}
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          height={1080}
          width={1920}
        />
      </div>
      <Container className="py-12 drop-shadow-xl">{children}</Container>
    </header>
  );
};

export default Hero;
