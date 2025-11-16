import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { auth } from '$lib/server/auth';

export const load: LayoutServerLoad = async ({ cookies, request }) => {
	const token = cookies.get('better-auth.session_token');
	const user = await auth.api.getSession({
		headers: request.headers
	});
	if (!user || !token) {
		throw redirect(302, '/login');
	}

	return { session: { token, user } };
};
