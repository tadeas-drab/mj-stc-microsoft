import {
  CancelIcon,
  GlobalNavButtonIcon,
} from '@fluentui/react-icons-mdl2';

import { Disclosure } from '@headlessui/react';
import Icon from '../Icon';

interface NavbarToggleProps {
  open: boolean;
}

const NavbarToggle = ({ open }: NavbarToggleProps) => {
  return (
    <Disclosure.Button className="inline-flex h-10 w-10 items-center justify-center text-lg text-black focus:outline-none focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-black active:outline-dashed active:outline-1 active:outline-black">
      <Icon
        screenReaderLabel={`${open ? 'Zatvoriť' : 'Otvoriť'} hlavné menu`}
        icon={open ? CancelIcon : GlobalNavButtonIcon}
      />
    </Disclosure.Button>
  );
};

export default NavbarToggle;
