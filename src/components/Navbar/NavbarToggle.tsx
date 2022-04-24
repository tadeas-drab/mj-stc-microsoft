import {
  CancelIcon,
  GlobalNavButtonIcon,
} from '@fluentui/react-icons-mdl2';
import { Disclosure } from '@headlessui/react';

interface NavbarToggleProps {
  open: boolean;
}

const NavbarToggle = ({ open }: NavbarToggleProps) => {
  const Icon = open ? CancelIcon : GlobalNavButtonIcon;

  return (
    <Disclosure.Button className="inline-flex items-center justify-center w-10 h-10 text-lg active:outline-black active:outline-1 active:outline-dashed focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-black focus:outline-none">
      <span className="sr-only">Zatvoriť navigáciu</span>
      <Icon aria-hidden />
    </Disclosure.Button>
  );
};

export default NavbarToggle;
