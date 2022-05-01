import { Disclosure } from '@headlessui/react';
import { navigation } from '../../config';
import NavbarLink from './NavbarLink';
import Container from '../Container';
import Button from '../Button';

const NavbarMenu = () => {
  return (
    <div className="hidden flex-grow items-center justify-between lg:flex">
      <ul className="flex flex-shrink-0 space-x-2 xl:space-x-3">
        {navigation.map(({ name, href }) => (
          <li key={name}>
            <NavbarLink
              className="text-sm text-black hover:underline hover:decoration-extra-dark-gray hover:decoration-2 hover:underline-offset-[5px]"
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
  );
};

const MobileNavbarMenu = () => {
  return (
    <Disclosure.Panel className="border-t bg-extra-light-gray lg:hidden">
      <Container as="ul">
        {navigation.map(({ name, href }) => (
          <Disclosure.Button
            className="border-t py-1 first:border-0"
            key={name}
            as="li"
          >
            <NavbarLink className="w-full text-black" href={href}>
              {name}
            </NavbarLink>
          </Disclosure.Button>
        ))}
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
  );
};

export default Object.assign(NavbarMenu, {
  Mobile: MobileNavbarMenu,
});
