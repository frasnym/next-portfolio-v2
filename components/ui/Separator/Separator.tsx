import type { NextPage } from 'next';
import styles from './Separator.module.css';

const Separator: NextPage = () => {
  return (
    <div className='mx-0 my-12'>
      <hr className={styles.hr} />
    </div>
  );
};

export default Separator;
