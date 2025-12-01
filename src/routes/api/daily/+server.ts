import type { RequestHandler } from '@sveltejs/kit';
import type { GoogleBooks } from '../../../types/trending-google-books';

export const GET: RequestHandler = async () => {
  try {
    const res = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=bestseller&orderBy=newest&maxResults=40'
    );
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Error fetching trending books' }), {
        status: 500
      });
    }
    const data: GoogleBooks = await res.json();
    const random = data.items[Math.floor(Math.random() * data.items.length)]
    return new Response(JSON.stringify(random), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error }), { status: 500 });
  }
};
