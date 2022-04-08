import type { NextPage } from 'next';
import { Emoji } from 'react-component-utility';
import styled from 'styled-components';
import DefaultLayout from '../components/layouts/default-layout';
import { COLOR_PALLETES } from '../components/utils/contant';

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

const Writing: NextPage = () => {
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
        {/* TODO: Article Card */}
      </Container>
    </DefaultLayout>
  );
};

export default Writing;
