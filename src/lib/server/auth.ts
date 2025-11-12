import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './db';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg'
	}),
	emailAndPassword: {
		enabled: true
	},
	socialProviders: {
		google: {
			clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
			clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET as string
		}
	},
	plugins: [sveltekitCookies(getRequestEvent)]
});
