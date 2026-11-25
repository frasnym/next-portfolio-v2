import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('centers the flag between the role words without a broken image', () => {
    render(<Header />);

    const role = screen.getByRole('heading', { level: 2 });
    expect(role).toHaveTextContent('Indonesian🇮🇩Software Engineer');
    expect(role).toHaveClass('items-center', 'justify-center');
    expect(role.querySelector('img')).toBeNull();
    expect(
      screen.getByRole('img', { name: 'Flag of Indonesia' })
    ).toBeInTheDocument();
  });
});
