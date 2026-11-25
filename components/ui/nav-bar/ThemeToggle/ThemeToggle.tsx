import type { NextPage } from 'next';
import styles from './ThemeToggle.module.css';

const ThemeToggle: NextPage = () => {
  const changeTheme = () => {
    const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
  };

  return (
    <button
      className={styles['toggle-button']}
      aria-label='Toggle color theme'
      title='Toggle color theme'
      type='button'
      onClick={changeTheme}
    >
      <span className={styles['toggle-thumb']} />
      <span aria-hidden={true}>🌙</span>
      <span aria-hidden={true}>☀️</span>
    </button>
  );
};

export default ThemeToggle;
