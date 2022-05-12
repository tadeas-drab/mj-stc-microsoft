import { Disclosure } from '@headlessui/react';
import { navigation } from '../../../config';

import NavbarToggle from './NavbarToggle';
import NavbarLink from './NavbarLink';
import Container from '../Container';
import Button from '../Button';
import Image from 'next/image';

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
                  rel="external nofollow"
                  target="_blank"
                >
                  <Image
                    src="/images/microsoft-logo.png"
                    alt="Microsoft logo"
                    width={108}
                    height={23}
                  />
                </NavbarLink>
                <div className="mx-2 h-6 w-[2px] bg-extra-dark-gray md:mx-4" />
                <NavbarLink
                  className="text-md font-semibold tracking-tight text-medium-gray lg:hover:underline lg:hover:decoration-medium-gray lg:hover:decoration-2 lg:hover:underline-offset-[5px]"
                  href="/"
                >
                  <span className="sm:hidden">ŠTC</span>
                  <span className="hidden sm:inline">
                    Študentské Trénerské Centrum
                  </span>
                </NavbarLink>
              </div>
              <div className="absolute inset-y-0 right-0 lg:hidden">
                <NavbarToggle open={open} />
              </div>
            </div>
            <div className="hidden flex-grow items-center justify-between lg:flex">
              <ul className="flex flex-shrink-0 space-x-2 xl:space-x-4">
                {navigation.map(({ name, href }) => (
                  <li key={name}>
                    <NavbarLink
                      className="text-sm font-normal tracking-normal text-black hover:underline hover:decoration-extra-dark-gray hover:decoration-2 hover:underline-offset-[5px]"
                      href={href}
                    >
                      {name}
                    </NavbarLink>
                  </li>
                ))}
              </ul>
              <Button
                title="Registrácia do programu ŠTC"
                href="/registracia"
                type="default"
              >
                Registrácia
              </Button>
            </div>
          </Container>
          <Disclosure.Panel className="border-t bg-extra-light-gray">
            <Container>
              <ul className="divide-y">
                {navigation.map(({ name, href }) => (
                  <Disclosure.Button key={name} className="py-1.5" as="li">
                    <NavbarLink href={href} className="w-full text-black">
                      {name}
                    </NavbarLink>
                  </Disclosure.Button>
                ))}
              </ul>
              <div className="pt-1 pb-4">
                <Button
                  title="Registrácia do programu ŠTC"
                  href="/registracia"
                  type="outline"
                  fullWidth
                >
                  Registrácia
                </Button>
              </div>
            </Container>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
