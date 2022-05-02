import NavbarLink from './NavbarLink';
import Image from 'next/image';

const NavbarLogo = () => {
  return (
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
  );
};

export default NavbarLogo;
