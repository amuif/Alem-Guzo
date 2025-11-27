import type { RequestHandler } from '@sveltejs/kit';
import type { GoogleBooks } from '../../../types/trending-google-books';

export const GET: RequestHandler = async () => {
  try {
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=relevance&maxResults=20');
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Error fetching trending books' }), {
        status: 500
      });
    }
    const data: GoogleBooks = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error }), { status: 500 });
  }
};
