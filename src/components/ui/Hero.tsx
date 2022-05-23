import classNames from 'classnames';
import Container from './Container';
import Image from 'next/image';

interface HeroProps {
  children: React.ReactNode;
  backgroundImage: { src: string; alt: string };
  backgroundPosition: 'top' | 'center' | 'bottom';
  large?: boolean;
}

const Hero = ({
  children,
  backgroundImage,
  backgroundPosition,
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
          'absolute inset-0 -z-50 h-full select-none lg:fixed',
          large ? 'lg:h-[80vh]' : 'lg:h-[50vh]'
        )}
      >
        <Image
          className={classNames({
            'object-bottom': backgroundPosition === 'bottom',
            'object-center': backgroundPosition === 'center',
            'object-top': backgroundPosition === 'top',
          })}
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          objectFit="cover"
          priority={true}
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
