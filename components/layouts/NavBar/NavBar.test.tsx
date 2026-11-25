import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const { routerState } = vi.hoisted(() => ({
  routerState: { asPath: '/', pathname: '/' },
}));

vi.mock('next/router', () => ({
  useRouter: () => routerState,
}));

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    className,
  }: {
    href: string;
    children: ReactNode;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

import NavBar from './NavBar';

describe('NavBar', () => {
  beforeEach(() => {
    routerState.asPath = '/';
    routerState.pathname = '/';
  });

  it('opens and closes the mobile menu from the toggle', () => {
    render(<NavBar />);

    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    expect(document.getElementById('mobile-nav')).not.toBeNull();

    fireEvent.click(screen.getByRole('button', { name: 'Close navigation menu' }));
    expect(document.getElementById('mobile-nav')).toBeNull();
  });

  it('closes the menu on Escape', () => {
    render(<NavBar />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(document.getElementById('mobile-nav')).toBeNull();
  });

  it('closes the menu on an outside click', () => {
    render(<NavBar />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));

    fireEvent.mouseDown(document.body);

    expect(document.getElementById('mobile-nav')).toBeNull();
  });

  it('closes the menu when the route changes', () => {
    const { rerender } = render(<NavBar />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));

    routerState.asPath = '/code';
    rerender(<NavBar />);

    expect(document.getElementById('mobile-nav')).toBeNull();
  });
});
