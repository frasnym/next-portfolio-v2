import type { NextPage } from 'next';
import { Props as WritingProps } from '../../../../pages/writing';
import { ArticleCard } from '../Card';

const List: NextPage<WritingProps> = ({ articles }) => {
  return (
    <div className='text-2xl text-center'>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default List;
