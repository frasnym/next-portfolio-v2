import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('next/head', () => ({
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

vi.mock('next/router', () => ({
  useRouter: () => ({ asPath: '/', pathname: '/' }),
}));

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

import DefaultLayout from './DefaultLayout';

describe('DefaultLayout', () => {
  it('renders the document title as a single string', () => {
    const errors = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <DefaultLayout title='Code'>
        <p>body</p>
      </DefaultLayout>
    );

    expect(document.title).toBe('Code | Nyoman Frastyawan');
    expect(errors).not.toHaveBeenCalled();
    errors.mockRestore();
  });
});
