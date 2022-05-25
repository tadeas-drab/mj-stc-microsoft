import {
  CancelIcon,
  GlobalNavButtonIcon,
} from '@fluentui/react-icons-mdl2';

import { Disclosure } from '@headlessui/react';
import Image from 'next/image';

import NavbarLink from './NavbarLink';
import Container from '../Container';
import Button from '../Button';
import Icon from '../Icon';

const navigation = [
  { name: 'O programe', href: '/#oPrograme' },
  { name: 'Študenti', href: '/studenti' },
  { name: 'Absolventi', href: '/absolventi' },
  { name: 'Kontakt', href: '/#kontakt' },
];

const Navbar = () => {
  return (
    <Disclosure className="sticky top-0 z-50 bg-white shadow" as="nav">
      {({ open }) => (
        <>
          <Container className="flex h-14 items-center space-x-2 xl:space-x-4">
            <div className="relative flex-grow lg:flex-grow-0">
              <div className="flex items-center">
                <NavbarLink
                  href="https://www.microsoft.com"
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                  as="link"
                >
                  <Image
                    src="/images/logo/microsoft.png"
                    alt="Microsoft logo"
                    priority={true}
                    width={108}
                    height={23}
                  />
                </NavbarLink>
                <div className="mx-2 h-6 w-[2px] bg-extra-dark-gray md:mx-4" />
                <NavbarLink
                  className="text-md font-semibold tracking-tight text-medium-gray lg:hover:underline lg:hover:decoration-medium-gray lg:hover:decoration-2 lg:hover:underline-offset-[5px]"
                  as="link"
                  href="/"
                >
                  <span className="sm:hidden">ŠTC</span>
                  <span className="hidden sm:inline">
                    Študentské Trénerské Centrum
                  </span>
                </NavbarLink>
              </div>
              <div className="absolute inset-y-0 right-0 lg:hidden">
                <Disclosure.Button className="inline-flex h-10 w-10 items-center justify-center text-lg text-black focus:outline-none focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-black active:outline-dashed active:outline-1 active:outline-black">
                  <Icon
                    screenReaderLabel={`${
                      open ? 'Zatvoriť' : 'Otvoriť'
                    } hlavné menu`}
                    icon={open ? CancelIcon : GlobalNavButtonIcon}
                  />
                </Disclosure.Button>
              </div>
            </div>
            <div className="hidden flex-grow items-center justify-between lg:flex">
              <ul className="flex flex-shrink-0 space-x-2 xl:space-x-4">
                {navigation.map(({ name, href }) => (
                  <li key={name}>
                    <NavbarLink
                      className="text-sm font-normal tracking-normal text-black hover:underline hover:decoration-extra-dark-gray hover:decoration-2 hover:underline-offset-[5px]"
                      href={href}
                      as="link"
                    >
                      {name}
                    </NavbarLink>
                  </li>
                ))}
              </ul>
              <Button
                title="Registrácia do programu ŠTC"
                variant="primary-solid"
                href="/registracia"
                as="link"
              >
                Registrácia
              </Button>
            </div>
          </Container>
          <Disclosure.Panel className="border-t bg-extra-light-gray lg:hidden">
            <Container>
              <ul className="divide-y">
                {navigation.map(({ name, href }) => (
                  <Disclosure.Button key={name} className="py-1.5" as="li">
                    <NavbarLink
                      className="w-full text-black"
                      href={href}
                      as="link"
                    >
                      {name}
                    </NavbarLink>
                  </Disclosure.Button>
                ))}
              </ul>
              <Disclosure.Button className="pt-1 pb-4" as="div">
                <Button
                  title="Registrácia do programu ŠTC"
                  variant="primary-outline"
                  href="/registracia"
                  fullWidth={true}
                  as="link"
                >
                  Registrácia
                </Button>
              </Disclosure.Button>
            </Container>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
