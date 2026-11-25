import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle: NextPage = () => {
  const [activeTheme, setActiveTheme] = useState<string>('dark');
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    setActiveTheme(document.body.dataset.theme || 'dark');
  }, []);

  const changeTheme = () => {
    document.body.dataset.theme = inactiveTheme;
    window.localStorage.setItem('theme', inactiveTheme);
    setActiveTheme(inactiveTheme);
  };

  const transformClassName =
    activeTheme === 'dark'
      ? styles['toggle-thumb-dark']
      : styles['toggle-thumb-light'];

  return (
    <button
      className={styles['toggle-button']}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type='button'
      onClick={changeTheme}
    >
      <span className={`${styles['toggle-thumb']} ${transformClassName}`} />
      <span aria-hidden={true}>🌙</span>
      <span aria-hidden={true}>☀️</span>
    </button>
  );
};

export default ThemeToggle;
