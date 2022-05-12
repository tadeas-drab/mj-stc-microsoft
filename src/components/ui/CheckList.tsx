import CircleCheckIcon from '../icons/CircleCheckIcon';
import classNames from 'classnames';

interface CheckListProps {
  className?: string;
  items: string[];
}

const CheckList = ({ className, items }: CheckListProps) => {
  return (
    <ul className={classNames('space-y-1', className)}>
      {items.map((item) => (
        <li key={item} className="inline-flex items-center gap-3">
          <CircleCheckIcon className="text-lg text-primary" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
