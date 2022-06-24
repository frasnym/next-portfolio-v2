import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { ThemeToggle } from '../../ui/nav-bar/ThemeToggle';
import { PAGE_NAV } from '../../utils/constant';

const NavBar: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const linksElement = PAGE_NAV.map((nav) => (
    <Link key={nav.title} href={nav.href}>
      <a className='inline-block px-2 text-xl font-bold ease-in-out text-theme-primary hover:text-theme-secondary'>
        {nav.title}
      </a>
    </Link>
  ));

  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 bg-theme-primary-transparent'>
      <div className='hidden w-20 md:block'></div>
      <aside className='block md:hidden'>
        <button
          className='p-4 rounded-md bg-theme-secondary'
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaHamburger />
        </button>
        {showMenu ? (
          <nav className='absolute flex flex-col items-start gap-2 p-5 mt-3 rounded-md bg-theme-secondary'>
            {linksElement}
          </nav>
        ) : null}
      </aside>
      <nav className='hidden md:block'>{linksElement}</nav>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
