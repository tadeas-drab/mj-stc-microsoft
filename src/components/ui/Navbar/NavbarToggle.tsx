import {
  CancelIcon,
  GlobalNavButtonIcon,
} from '@fluentui/react-icons-mdl2';
import { Disclosure } from '@headlessui/react';

interface NavbarToggleProps {
  open: boolean;
}

const NavbarToggle = ({ open }: NavbarToggleProps) => {
  const ToggleIcon = open ? CancelIcon : GlobalNavButtonIcon;

  return (
    <Disclosure.Button className="inline-flex h-10 w-10 items-center justify-center text-lg text-black focus:outline-none focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-black active:outline-dashed active:outline-1 active:outline-black">
      <span className="sr-only">
        {open ? 'Zatvoriť' : 'Otvoriť'} hlavné menu
      </span>
      <ToggleIcon aria-hidden />
    </Disclosure.Button>
  );
};

export default NavbarToggle;
