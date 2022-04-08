import type { NextPage } from 'next';
import { Emoji } from 'react-component-utility';
import styled from 'styled-components';
import DefaultLayout from '../components/layouts/default-layout';
import { ArticleList } from '../components/writing-page/Articles/List';
import { ArticleDevTo } from '../types';

export interface WritingProps {
  articles: ArticleDevTo[];
}

const Container = styled.article`
  text-align: left;
  font-size: 1.2rem;
  & p {
    padding: 0.8rem 0.8rem 0 0.8rem;
    & a {
      color: blue;
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

const Writing: NextPage<WritingProps> = ({ articles }) => {
  return (
    <DefaultLayout title='Writing'>
      <Container>
        <p>
          &quot;I love to write&quot;, maybe not <Emoji symbol='😅' />. Usually
          I write to take a note so I don&apos;t forget about things I just
          learned.
        </p>
        <p>
          I write about programming things then publish it on{' '}
          <a href='http://dev.to/frasnym' target='_blank' rel='noreferrer'>
            dev.to
          </a>
          . So if anyone coincidentally find that article useful, it is my
          pleasure to be able to help.
        </p>
        <ArticleList articles={articles} />
      </Container>
    </DefaultLayout>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://dev.to/api/articles?username=frasnym');
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}

export default Writing;
