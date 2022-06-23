import type { NextPage } from 'next';
import { SOCIAL_MEDIA_LINKS } from '../../utils/constant';

const SocialMediaLinks: NextPage = () => {
  return (
    <section className='flex justify-center'>
      {SOCIAL_MEDIA_LINKS.map((aIcon) => (
        <a
          key={aIcon.href}
          className='inline m-2 text-4xl'
          href={aIcon.href}
          target='_blank'
          rel='noreferrer'
        >
          {aIcon.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialMediaLinks;
