import type { NextPage } from 'next';
import styled from 'styled-components';
import { SOCIAL_MEDIA_LINKS } from '../../utils/constant';

const Container = styled.footer`
  text-align: right;
  padding: 0.5rem 0 1rem;
  margin: 0 0.5rem;
  & a {
    padding: 0 0.2rem;
    vertical-align: middle;
  }
`;

const Footer: NextPage = () => {
  return (
    <footer className='py-4 pl-4 divide-y-2 divide-solid divide-neutral-400'>
      <div>{''}</div>
      <div className='flex items-center justify-end pt-3'>
        {SOCIAL_MEDIA_LINKS.map((aIcon) => {
          return (
            <a
              key={aIcon.href}
              className='px-1'
              href={aIcon.href}
              target='_blank'
              rel='noreferrer'
            >
              {aIcon.icon}
            </a>
          );
        })}
        | <span className='px-1 font-bold'>FrasNym</span> &copy;{' '}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
