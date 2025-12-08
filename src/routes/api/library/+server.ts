import type { RequestHandler } from '@sveltejs/kit';
import type { ItemsInfo } from '../../../types/trending-google-books';
import { catagories } from '$lib/data/catagories';

export const GET: RequestHandler = async () => {
  const results: ItemsInfo[] = []
  try {
    await Promise.all(
      catagories.map(async (category) => {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(category)}&maxResults=20`
        );
        const json = await res.json();
        results.push(...(json.items || []));
      })
    );

    return new Response(JSON.stringify(results), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error }), { status: 500 });
  }
};
