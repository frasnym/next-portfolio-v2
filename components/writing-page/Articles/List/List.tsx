import type { WritingProps } from '../../../../types';
import { ArticleCard } from '../Card';

const List = ({ articles }: WritingProps) => {
  return (
    <div className='text-2xl text-center'>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default List;
