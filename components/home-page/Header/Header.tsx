import type { NextPage } from 'next';
import Image from 'next/image';

const Header: NextPage = () => {
  return (
    <header className='text-center'>
      <div className='flex'>
        <div className='flex-1'>
          <Image
            className='max-w-full p-8 rounded-full'
            src='/images/avatar.jpg'
            alt='Photos of FrasNym'
            width={260}
            height={260}
          />
        </div>
        <h1 className='self-center flex-1 font-bold leading-less-none'>
          <span className='block text-big'>Fras</span>
          <span className='block text-less-big'>Nym</span>
        </h1>
      </div>
      <h2 className='my-4 text-2xl font-bold'>
        Indonesian{' '}
        <span className='align-sub'>
          <Image
            src='/images/flag-indonesia_1f1ee-1f1e9.png'
            alt='Flag of Indonesia Country'
            width={24}
            height={24}
          />
        </span>{' '}
        Software Engineer{' '}
      </h2>
    </header>
  );
};

export default Header;
