import {
  AddFriendIcon,
  ColorIcon,
  EatDrinkIcon,
  EducationIcon,
  FileCodeIcon,
  GuitarIcon,
  MoreSportsIcon,
  PartyLeaderIcon,
} from '@fluentui/react-icons-mdl2';

import type { Student } from '../../types';
import { api } from '../../utils';

import Image from 'next/image';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import Icon from '../ui/Icon';

const interestTypes = {
  vzor: {
    title: 'Najväčší vzor',
    icon: PartyLeaderIcon,
  },
  technologie: {
    title: 'Obľúbené technológie',
    icon: FileCodeIcon,
  },
  hudba: {
    title: 'Obľúbená hudba',
    icon: GuitarIcon,
  },
  jedlo: {
    title: 'Obľúbené jedlo',
    icon: EatDrinkIcon,
  },
  fraba: {
    title: 'Obľúbená farba',
    icon: ColorIcon,
  },
  konicky: {
    title: 'Koníčky',
    icon: MoreSportsIcon,
  },
};

type InterestType = keyof typeof interestTypes;

interface StudentModalProps {
  student: Student | null;
  onClose: () => void;
  show: boolean;
}

const StudentModal = ({ student, onClose, show }: StudentModalProps) => {
  if (student) {
    const {
      id,
      stcName,
      stcSchool,
      stcYear,
      stcBio,
      stcInterests,
      stcLinkedIn,
    } = student;

    const interests: {
      [key in InterestType]: string;
    } = JSON.parse(stcInterests);

    return (
      <Modal title="Informácie o študentovi" onClose={onClose} show={show}>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 md:col-span-1">
            <div className="rounded-md border border-primary p-1">
              <Image
                className="select-none rounded-md"
                src={api(`stc/students/${id}`)}
                layout="responsive"
                objectFit="cover"
                title={stcName}
                alt={stcName}
                height={450}
                width={300}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2 md:h-[335px] md:overflow-y-scroll md:pr-4">
            <h3 className="mb-1 text-lg font-semibold leading-relaxed text-black">
              {stcName}
            </h3>
            <ul className="mb-4 space-y-1">
              <li className="flex text-black">
                <Icon
                  className="mr-2 mt-0.5 text-lg text-primary"
                  screenReaderLabel="Stredná škola"
                  icon={EducationIcon}
                />
                {stcSchool}
              </li>
              <li className="flex text-black">
                <Icon
                  className="mr-2 mt-0.5 text-lg text-primary"
                  screenReaderLabel="Ročník"
                  icon={AddFriendIcon}
                />
                Ročník {stcYear}
              </li>
            </ul>
            <h4 className="mb-1 font-semibold text-black">Biografia</h4>
            <p className="mb-4 leading-relaxed text-black">{stcBio}</p>
            <h4 className="mb-3 font-semibold text-black">Zaujímavosti</h4>
            <ul className="mb-6 space-y-2">
              {Object.entries(interests).map(([interest, value]) => (
                <li key={interest} className="flex">
                  <Icon
                    className="mr-2 shrink-0 text-lg text-primary"
                    icon={interestTypes[interest as InterestType].icon}
                  />
                  <p className="-mt-1 leading-relaxed text-black">
                    <span className="font-semibold text-extra-dark-gray">
                      {interestTypes[interest as InterestType].title}:{' '}
                    </span>
                    {value}
                  </p>
                </li>
              ))}
            </ul>
            <Button
              rel="noreferrer nofollow noopener"
              variant="primary-outline"
              href={stcLinkedIn}
              target="_blank"
              as="link"
            >
              Spojiť sa so študentom cez LinkedIn
            </Button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal title="Informácie o študentovi" onClose={onClose} show={show}>
      <div className="flex h-[335px] items-center justify-center text-center">
        Načítavam informácie o študentovi...
      </div>
    </Modal>
  );
};

export default StudentModal;
