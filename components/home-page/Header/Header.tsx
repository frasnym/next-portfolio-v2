import type { NextPage } from 'next';

const Header: NextPage = () => {
  return (
    <header className='text-center'>
      <h1 className='self-center flex-1 pb-10 font-bold leading-less-none'>
        <span className='block pb-5 text-big'>Nyoman</span>
        <span className='block text-less-big'>Frastyawan</span>
      </h1>
      <h2 className='my-4 flex items-center justify-center gap-2 text-2xl font-bold'>
        <span>Indonesian</span>
        <span role='img' aria-label='Flag of Indonesia'>
          🇮🇩
        </span>
        <span>Software Engineer</span>
      </h2>
    </header>
  );
};

export default Header;
