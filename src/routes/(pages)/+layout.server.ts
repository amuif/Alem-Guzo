import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { auth } from '$lib/server/auth';

export const load: LayoutServerLoad = async ({ request, cookies }) => {
	const cookieToken = cookies.get('better-auth.session_token');
	const session = await auth.api.getSession({
		headers: request.headers
	});
	if (!session) {
		throw redirect(302, '/login');
	}
	return { session, cookieToken };
};
