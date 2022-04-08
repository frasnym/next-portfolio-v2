import type { NextPage } from 'next';
import { Emoji } from 'react-component-utility';
import styled from 'styled-components';
import { ArticleDevTo } from '../../../../types';

const Container = styled.div`
  text-align: left;
  font-size: 1.5rem;
  border: 2px solid;
  padding: 1rem;
  margin-bottom: 1rem;
  & h5 {
    margin: 0;
  }
`;

const AnchorToArticle = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardBody = styled.div`
  font-size: 1rem;
  & div:nth-child(1) {
    margin: 0 1rem 0 0;
  }
  & div {
    display: inline-block;
    margin: 0 1rem;
    & span:first-child {
      margin-right: 0.2rem;
    }
  }
`;

const TagList = styled.div`
  & span:not(:first-child):not(:last-child):after {
    content: ', ';
  }
`;

interface CardProps {
  article: ArticleDevTo;
}

const Card: NextPage<CardProps> = ({ article }) => {
  return (
    <Container>
      <AnchorToArticle href={article.url} target={'_blank'} rel={'noreferrer'}>
        <div>
          <h5>{article.title}</h5>
          <CardBody>
            <TagList>
              <Emoji symbol='🏷' />
              {article.tag_list.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </TagList>
            <div>
              <Emoji symbol='⏱' />
              {`~ ${article.reading_time_minutes}min`}
            </div>
            <div>
              <Emoji symbol='🌟' />
              {article.positive_reactions_count}
            </div>
          </CardBody>
        </div>
        <Emoji symbol='🚀' />
      </AnchorToArticle>
    </Container>
  );
};

export default Card;
