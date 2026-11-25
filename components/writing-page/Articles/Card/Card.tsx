import type { NextPage } from 'next';
import styles from './Card.module.css';
import { ArticleDevTo } from '../../../../types';
interface Props {
  article: ArticleDevTo;
}

const Card: NextPage<Props> = ({ article }) => {
  return (
    <div className='p-4 my-4 text-2xl text-left border-2 border-solid border-theme-primary'>
      <a
        className='flex flex-row items-center justify-between'
        href={article.url}
        target={'_blank'}
        rel={'noreferrer'}
      >
        <div>
          <h5 className='font-bold text-md'>{article.title}</h5>
          <div className='text-base'>
            <div className={`${styles['tag-list']} mr-4 inline-block`}>
              🏷{' '}
              {article.tag_list.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className='inline-block mx-4'>
              ⏱ {`~ ${article.reading_time_minutes}min`}
            </div>
            <div className='inline-block mx-4'>
              🌟 {article.positive_reactions_count}
            </div>
          </div>
        </div>
        🚀
      </a>
    </div>
  );
};

export default Card;
