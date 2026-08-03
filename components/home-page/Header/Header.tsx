import type { NextPage } from 'next';
import Image from 'next/image';

const Header: NextPage = () => {
	return (
		<header className='text-center'>
			<h1 className='self-center flex-1 pb-10 font-bold leading-less-none'>
				<span className='block pb-5 text-big'>Nyoman</span>
				<span className='block text-less-big'>Frastyawan</span>
			</h1>
			<h2 className='my-4 text-2xl font-bold'>
				Indonesian{' '}
				<span className='align-sub'>
					<Image src='/images/flag-indonesia_1f1ee-1f1e9.png' alt='Flag of Indonesia Country' width={24} height={24} />
				</span>{' '}
				Software Engineer{' '}
			</h2>
		</header>
	);
};

export default Header;
