import type { Quote } from '../../types';
import { api } from '../../utils';

import QuoteRightIcon from '../icons/QuoteRightIcon';
import QuoteLeftIcon from '../icons/QuoteLeftIcon';
import Image from 'next/image';
import Icon from '../ui/Icon';

const QuoteCard = ({
  id,
  quote,
  quoteAuthor,
}: Omit<Quote, 'quoteOrder'>) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md bg-white shadow-lg">
      <div className="order-2 mt-8 flex-shrink-0 bg-extra-light-gray p-5">
        <div className="relative -mt-14 mb-3 ml-2 box-content h-20 w-20 overflow-hidden rounded-full border-[5px] border-white shadow-inner">
          <Image
            src={api(`stc/quotes/${id}`)}
            objectFit="contain"
            title={quoteAuthor}
            alt={quoteAuthor}
            layout="fill"
          />
        </div>
        <h3 className="text-md font-semibold text-black">{quoteAuthor}</h3>
        <p className="text-medium-gray">Absolvent programu</p>
      </div>
      <blockquote className="flex-grow p-8 text-extra-dark-gray">
        <Icon icon={QuoteLeftIcon} className="text-lg text-primary" />
        <span className="mx-2 align-middle italic">{quote}</span>
        <Icon icon={QuoteRightIcon} className="text-lg text-primary" />
      </blockquote>
    </article>
  );
};

export default QuoteCard;
