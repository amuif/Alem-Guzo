import { auth } from '$lib/server/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import { redirect, type Handle } from '@sveltejs/kit';

const publicRoutes = ['/', '/login', '/signup'];
export const handle: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({
		headers: event.request.headers
	});
	const isInPublicRoute = publicRoutes.includes(event.route.id || '/dashboard');

	if (!session && !isInPublicRoute) {
		throw redirect(302, '/login');
	}
	if (session) {
		event.locals.session = session.session;
		event.locals.user = session.user;
	}
	return svelteKitHandler({ event, resolve, auth, building });
};
