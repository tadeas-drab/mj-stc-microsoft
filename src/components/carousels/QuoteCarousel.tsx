import type { Quote } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import QuoteCard from '../cards/QuoteCard';

interface QuoteCarouselProps {
  quotes: Quote[];
}

const QuoteCarousel = ({ quotes }: QuoteCarouselProps) => {
  return (
    <Swiper
      loop={true}
      autoplay={true}
      centeredSlides={true}
      style={{ overflow: 'unset' }}
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      breakpoints={{
        1300: { slidesPerView: 2.75 },
        992: { slidesPerView: 1.75 },
        768: { slidesPerView: 1.25 },
        0: { slidesPerView: 1 },
      }}
    >
      {quotes.map(({ id, ...props }) => (
        <SwiperSlide key={id} style={{ height: 'auto' }}>
          <QuoteCard {...props} id={id} />
        </SwiperSlide>
      ))}
      <div className="mt-8 -mb-4" slot="container-end">
        <div className="swiper-pagination" />
      </div>
    </Swiper>
  );
};

export default QuoteCarousel;
