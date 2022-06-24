import type { NextPage } from 'next';
import { Emoji } from 'react-component-utility';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { ArticleList } from '../components/writing-page/Articles/List';
import { ArticleDevTo } from '../types';

export interface Props {
  articles: ArticleDevTo[];
}

const classNameP = 'py-3';

const Writing: NextPage<Props> = ({ articles }) => {
  return (
    <DefaultLayout title='A personal note to help me and others'>
      <article className='text-xl text-left'>
        <p className={classNameP}>
          &quot;I love to write&quot;, maybe not <Emoji symbol='😅' />. Usually
          I write to take a note so I don&apos;t forget about things I just
          learned.
        </p>
        <p className={classNameP}>
          I write about programming things then publish it on{' '}
          <a
            className='font-bold underline text-theme-secondary'
            href='http://dev.to/frasnym'
            target='_blank'
            rel='noreferrer'
          >
            dev.to
          </a>
          . So if anyone coincidentally find that article useful, it is my
          pleasure to be able to help.
        </p>
        <ArticleList articles={articles} />
      </article>
    </DefaultLayout>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  try {
    const res = await fetch('https://dev.to/api/articles?username=frasnym');
    const articles = await res.json();

    return { props: { articles } };
  } catch (error) {
    console.error(error);
    return { props: { articles: [] } };
  }
}

export default Writing;
