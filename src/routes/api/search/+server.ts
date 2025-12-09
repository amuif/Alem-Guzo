import type { RequestHandler } from "@sveltejs/kit";
import type { GoogleBooks } from "../../../types/trending-google-books";

export const POST: RequestHandler = async ({ url }) => {
  try {
    const query = url.searchParams.get('search')
    if (!query) return new Response(JSON.stringify({ error: 'No query provided' }), { status: 400 });

    const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`)
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Error fetching trending books' }), {
        status: 500
      });
    }
    const data: GoogleBooks = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'content-type': 'application/json' }
    });
  } catch (error) {
    console.log("Error searching by title", error)
    return new Response(JSON.stringify({ error: 'Server error', details: error }), { status: 500 });
  }

}  
