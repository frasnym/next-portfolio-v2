import type { NextPage } from 'next';
import { SkillsBox } from '../components/code-page/SkillsBox';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { COLOR_PALLETS } from '../components/utils/constant';

const classNameP = 'py-3';

const Code: NextPage = () => {
  return (
    <DefaultLayout title='Summary of my developer magic'>
      <article className='text-xl text-left'>
        <p className={classNameP}>
          I have been in this programming field for more than 4 years. I have
          written a lot of code. Learn different programming languages along the
          way from either the frontend or the backend. Sometimes it&apos;s just
          a little tasting and always go deep into it if I feel comfortable
          using it.
        </p>
        <p className={classNameP}>
          Now I&apos;ve decided to go more towards the backend. Therefore, I
          often use Golang and NodeJS in accordance with my work as a{' '}
          <b>backend developer</b>.
          <SkillsBox
            skills={[
              'Golang',
              'JavaScript',
              'TypeScript',
              'NodeJS',
              'PHP',
              'SQL',
              'NoSQL',
              'Redis',
              'Firebase',
            ]}
            colorPallets={COLOR_PALLETS[0]}
          />
        </p>
        <p className={classNameP}>
          There was also a time when I suddenly got a project idea. To make it
          happen, of course I need frontend skills too, although not deep. I
          think it&apos;s enough to make a small application.
          <SkillsBox
            skills={['ReactJS', 'NextJS', 'Flutter', 'TailwindCSS']}
            colorPallets={COLOR_PALLETS[1]}
          />
        </p>
        <p className={classNameP}>
          And some honorable mentions. There are tools, architectures, best
          practices and more that help me when developing apps.
          <SkillsBox
            skills={['Git', 'Docker', 'Unit Testing', 'Message Queue', 'gRPC']}
            colorPallets={COLOR_PALLETS[2]}
          />
        </p>
      </article>
    </DefaultLayout>
  );
};

export default Code;
