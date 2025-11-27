import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { dbExport } from './db';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';

export const auth = betterAuth({
	database: drizzleAdapter(dbExport, {
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
