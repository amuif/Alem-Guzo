import type { RequestHandler } from '@sveltejs/kit';
import { catagories } from '$lib/data/catagories';
import type { TrendingBook } from '../../../types/trending-books';

export const GET: RequestHandler = async () => {
	const results: TrendingBook[] = [];
	try {
		await Promise.all(
			catagories.map(async (category) => {
				const res = await fetch(`https://openlibrary.org/subjects/${category}.json?details=true`);
				const json = await res.json();
				results.push(...(json.works || []));
			})
		);

		return new Response(JSON.stringify(results), {
			headers: { 'content-type': 'application/json' }
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Server error', details: error }), { status: 500 });
	}
};
