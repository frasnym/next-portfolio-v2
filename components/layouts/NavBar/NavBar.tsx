import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { ThemeToggle } from '../../ui/nav-bar/ThemeToggle';
import { PAGE_NAV } from '../../utils/constant';

const NavBar: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    setShowMenu(false);
  }, [router.asPath]);

  useEffect(() => {
    if (!showMenu) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowMenu(false);
    };
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setShowMenu(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('mousedown', closeOnOutsideClick);
    };
  }, [showMenu]);

  const linksElement = PAGE_NAV.map((nav) => (
    <Link key={nav.title} href={nav.href}>
      <a
        className={`inline-block px-2 text-xl font-bold ease-in-out hover:text-theme-secondary ${
          router.pathname === nav.href ? 'text-theme-secondary' : 'text-theme-primary'
        }`}
      >
        {nav.title}
      </a>
    </Link>
  ));

  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 bg-theme-primary-transparent'>
      <div className='hidden w-20 md:block'></div>
      <aside ref={menuRef} className='block md:hidden'>
        <button
          className='p-4 rounded-md bg-theme-secondary'
          aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={showMenu}
          aria-controls={showMenu ? 'mobile-nav' : undefined}
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaHamburger />
        </button>
        {showMenu ? (
          <nav
            id='mobile-nav'
            className='absolute flex flex-col items-start gap-2 p-5 mt-3 rounded-md bg-theme-secondary'
          >
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
