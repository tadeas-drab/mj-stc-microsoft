import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { Quote } from '../../types';

import QuoteCard from '../cards/QuoteCard';
import Section from '../ui/Section';

interface QuotesProps {
  quotes: Quote[];
}

const Quotes = ({ quotes }: QuotesProps) => {
  return (
    <Section id="citaty" className="bg-primary">
      <h2 className="mb-8 -mt-4 text-center text-xl font-semibold text-white">
        Citáty
      </h2>
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
    </Section>
  );
};

export default Quotes;
