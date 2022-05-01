import { Disclosure } from '@headlessui/react';
import NavbarToggle from './NavbarToggle';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';
import Container from '../Container';

const Navbar = () => {
  return (
    <Disclosure className="sticky top-0 bg-white shadow" as="nav">
      {({ open }) => (
        <>
          <Container className="flex h-14 items-center space-x-2 xl:space-x-3">
            <div className="relative flex-grow lg:flex-grow-0">
              <NavbarLogo />
              <div className="absolute inset-y-0 right-0 lg:hidden">
                <NavbarToggle open={open} />
              </div>
            </div>
            <NavbarMenu />
          </Container>
          <NavbarMenu.Mobile />
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
