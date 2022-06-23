import type { NextPage } from 'next';
import styled from 'styled-components';
import { Props as WritingProps } from '../../../../pages/writing';
import { ArticleCard } from '../Card';

const Container = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

const List: NextPage<WritingProps> = ({ articles }) => {
  return (
    <Container>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Container>
  );
};

export default List;
