import CircleCheckIcon from '../icons/CircleCheckIcon';
import classNames from 'classnames';
import Icon from './Icon';

interface CheckListProps {
  className?: string;
  items: string[];
}

const CheckList = ({ className, items }: CheckListProps) => {
  return (
    <ul className={classNames('space-y-1', className)}>
      {items.map((item) => (
        <li key={item} className="inline-flex items-center gap-3">
          <Icon icon={CircleCheckIcon} className="text-lg text-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
