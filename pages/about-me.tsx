import type { NextPage } from 'next';
import Image from 'next/image';
import { Emoji } from 'react-component-utility';
import { DefaultLayout } from '../components/layouts/DefaultLayout';

const baliImages = [
  {
    src: 'https://i.ibb.co/fYpKzSy/bali2.jpg',
    alt: 'Photo of Bali 1',
  },
  {
    src: 'https://i.ibb.co/t3K0qGn/bali1.jpg',
    alt: 'Photo of Bali 2',
  },
];

const classNameP = 'my-3 py-2';

const AboutMe: NextPage = () => {
  return (
    <DefaultLayout title='Just a little things about me'>
      <article className='text-xl text-left'>
        <p className={classNameP}>
          <b>
            Hi! <Emoji symbol='👋' />
          </b>
          , I love building new things with code and traveling with the
          earnings.
        </p>
        <p className={classNameP}>
          The first time I knew about programming was in my college days. The
          first programming language I knew was <b>PHP</b> and since then I
          started building websites with it.
        </p>
        <p className={classNameP}>
          I got my first job as a full-stack developer after 1 year I graduated
          from college. At that time it was difficult to get a job as a
          programmer. <br />
        </p>
        <p className={classNameP}>
          <i>FYI</i>, I live in Bali; One of the islands in Indonesia. A
          suitable place if you want to go on vacation in my opinion. Therefore,
          most of the job opportunities are opened for tourism, not technology.
        </p>
        <div className='text-center'>
          {baliImages.map((img) => (
            <div key={img.src} className='inline-block px-3'>
              <Image
                className='rounded-md'
                src={img.src}
                alt={img.alt}
                height={128}
                width={160}
              />
            </div>
          ))}
          <br />
          <text className='text-base'>This is some photos of Bali</text>
        </div>
        <p className={classNameP}>
          After 3 years working with PHP, I want to develop my career and start
          working with <b>Javascript</b> and <b>Golang</b> programming
          languages. I started working with a big team and learned a lot of new
          things.
        </p>
        <p className={classNameP}>
          Until now, I have been working in programming for about 4 years.
          I&apos;m used to working in teams, working with senior developers who
          always help raise my standard for applications that can be used by
          wider community.
        </p>
        <p className={classNameP}>
          Lastly, if you need help building something to achieve your goals with
          code or just want to know more about me. Feel free to contact me on
          any of my social media <Emoji symbol='😉' />.
        </p>
      </article>
    </DefaultLayout>
  );
};

export default AboutMe;
