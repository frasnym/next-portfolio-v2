import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle: NextPage = () => {
  const [activeTheme, setActiveTheme] = useState<string>();
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    setActiveTheme(document.body.dataset.theme || 'dark');
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme!);
  }, [activeTheme]);

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
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      <span className={`${styles['toggle-thumb']} ${transformClassName}`} />
      <span aria-hidden={true}>🌙</span>
      <span aria-hidden={true}>☀️</span>
    </button>
  );
};

export default ThemeToggle;
