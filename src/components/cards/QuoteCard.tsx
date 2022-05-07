import { Quote } from '../../types';
import { api } from '../../utils';

import QuoteRightIcon from '../icons/QuoteRightIcon';
import QuoteLeftIcon from '../icons/QuoteLeftIcon';
import Image from 'next/image';

type QuoteCardProps = Omit<Quote, 'quoteOrder'>;

const QuoteCard = ({ id, quote, quoteAuthor }: QuoteCardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded bg-white shadow-lg">
      <div className="order-2 mt-8 h-auto flex-shrink-0 bg-extra-light-gray p-5">
        <div className="relative -mt-14 mb-4 ml-2 h-20 w-20 overflow-hidden rounded-full shadow-inner ring-4 ring-white">
          <Image
            src={api(`stc/quotes/${id}`)}
            alt={quoteAuthor}
            layout="fill"
          />
        </div>
        <h3 className="text-md font-semibold text-black">{quoteAuthor}</h3>
        <p className="text-sm text-medium-gray">Absolvent programu</p>
      </div>
      <blockquote className="mb-2 flex-grow p-6 italic text-extra-dark-gray">
        <QuoteLeftIcon className="text-lg text-primary" aria-hidden />
        <span className="mx-2 align-middle">{quote}</span>
        <QuoteRightIcon className="text-lg text-primary" aria-hidden />
      </blockquote>
    </article>
  );
};

export default QuoteCard;
