import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SkillsBox from './SkillsBox';

describe('SkillsBox', () => {
  it('renders every skill', () => {
    render(
      <SkillsBox
        skills={['Golang', 'SQL']}
        colorPallets={[
          { background: '#005f73', color: '#ffffff' },
          { background: '#0a9396', color: '#ffffff' },
        ]}
      />
    );

    expect(screen.getByText('Golang')).toBeInTheDocument();
    expect(screen.getByText('SQL')).toBeInTheDocument();
  });

  it('cycles colors rather than crashing when skills outnumber colors', () => {
    const palette = [{ background: 'rgb(1, 1, 1)', color: 'white' }];

    render(<SkillsBox skills={['First', 'Second']} colorPallets={palette} />);

    expect(screen.getByText('First').style.background).toBe('rgb(1, 1, 1)');
    expect(screen.getByText('Second').style.background).toBe('rgb(1, 1, 1)');
  });
});
