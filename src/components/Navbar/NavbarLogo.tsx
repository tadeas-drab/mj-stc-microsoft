import NavbarLink from './NavbarLink';
import Image from 'next/image';

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <NavbarLink href="https://www.microsoft.com" rel="external nofollow">
        <Image
          src="/images/microsoft-logo.png"
          alt="Microsoft logo"
          width={108}
          height={23}
        />
      </NavbarLink>
      <div className="w-[2px] h-6 mx-2 bg-extra-dark-gray md:mx-4" />
      <NavbarLink
        className="text-[1.125rem] text-medium-gray font-semibold lg:hover:underline lg:hover:underline-offset-[5px] lg:hover:decoration-2 lg:hover:decoration-medium-gray"
        href="/"
      >
        <span className="sm:hidden">ŠTC</span>
        <span className="hidden sm:inline">
          Študentské Trénerské Centrum
        </span>
      </NavbarLink>
    </div>
  );
};

export default NavbarLogo;
