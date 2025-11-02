import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import type { RequestHandler } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password } = await request.json();
	console.table({ email, password });

	if (!email || !password) {
		return new Response(JSON.stringify({ error: 'Please fill the form properly' }), {
			status: 400
		});
	}
	const user = await db.select().from(users).where(eq(users.email, email));
	const existingUser = user[0];
	console.log(existingUser);
	if (!existingUser) {
		return new Response(JSON.stringify({ error: "User doesn't exist with this email" }), {
			status: 400
		});
	}
	return new Response(JSON.stringify({ success: true, data: existingUser }), { status: 200 });
};
