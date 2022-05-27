import type { BaseStudent } from '../../types';
import { api } from '../../utils';
import Image from 'next/image';

interface StudentCardProps
  extends Omit<BaseStudent, 'stcOrder' | 'stcYear'> {
  onClick?: (id: BaseStudent['id']) => void;
}

const StudentCard = ({ id, stcName, onClick }: StudentCardProps) => {
  return (
    <div
      className="group cursor-pointer"
      onClick={onClick && (() => onClick(id))}
    >
      <div className="relative overflow-hidden rounded-md bg-light-gray shadow-lg">
        <Image
          className="transform transition-transform group-hover:scale-105"
          src={api(`stc/students/${id}`)}
          layout="responsive"
          objectFit="cover"
          title={stcName}
          alt={stcName}
          height={450}
          width={300}
        />
      </div>
      <h3 className="mt-2 text-lg leading-relaxed text-black group-hover:underline group-hover:decoration-black">
        {stcName}
      </h3>
    </div>
  );
};

export default StudentCard;
