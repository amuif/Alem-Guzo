import type { RequestHandler } from '@sveltejs/kit';
import type { OpenLibraryAuthorSearchResponse } from '../../../types/authors';

export const GET: RequestHandler = async () => {
  try {
    const res = await fetch(
      'https://openlibrary.org/search/authors.json?q=classics&limit=3'
    );
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Error fetching popular books' }), {
        status: 500
      });
    }
    const data: OpenLibraryAuthorSearchResponse = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error }), { status: 500 });
  }
};
