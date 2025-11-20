import type { RequestHandler } from '@sveltejs/kit';
import type { OpenLibraryResult } from '../../../types/trending-books';

export const GET: RequestHandler = async () => {
	try {
		const res = await fetch('https://openlibrary.org/trending/weekly.json');
		if (!res.ok) {
			return new Response(JSON.stringify({ error: 'Error fetching trending books' }), {
				status: 500
			});
		}
		const data: OpenLibraryResult = await res.json();
		return new Response(JSON.stringify(data), {
			headers: { 'content-type': 'application/json' }
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Server error', details: error }), { status: 500 });
	}
};
