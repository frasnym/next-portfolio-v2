import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.body.dataset.theme = 'light';
    window.localStorage.clear();
  });

  afterEach(() => {
    delete document.body.dataset.theme;
    window.localStorage.clear();
  });

  it('switches to dark mode and persists the choice', () => {
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole('button', { name: 'Toggle color theme' }));

    expect(document.body.dataset.theme).toBe('dark');
    expect(window.localStorage.getItem('theme')).toBe('dark');
  });

  it('switches back to light mode', () => {
    document.body.dataset.theme = 'dark';
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole('button', { name: 'Toggle color theme' }));

    expect(document.body.dataset.theme).toBe('light');
    expect(window.localStorage.getItem('theme')).toBe('light');
  });
});
