import { afterEach, describe, expect, it, vi } from 'vitest';
import { getStaticProps } from '../pages/writing';

describe('writing getStaticProps', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('returns articles and enables hourly regeneration', async () => {
    const articles = [{ id: 1, title: 'A post' }];
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ json: async () => articles })
    );

    const result = await getStaticProps();

    expect(result).toEqual({ props: { articles }, revalidate: 3600 });
  });

  it('falls back to an empty list when the API is unavailable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
    vi.spyOn(console, 'error').mockImplementation(() => {});

    const result = await getStaticProps();

    expect(result).toEqual({ props: { articles: [] }, revalidate: 3600 });
    vi.restoreAllMocks();
  });
});
