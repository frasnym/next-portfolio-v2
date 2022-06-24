import type { NextPage } from 'next';
import styles from './Quote.module.css';

const Quote: NextPage = () => {
  return (
    <section className={styles.quote}>
      <p className='inline font-bold tracking-wide uppercase'>
        Code. Travel. Eat.
      </p>
    </section>
  );
};

export default Quote;
