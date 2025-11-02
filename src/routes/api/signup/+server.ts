import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import type { RequestHandler } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';

export const POST: RequestHandler = async ({ request }) => {
	const { email, password, fullName } = await request.json();
	console.table({ fullName, email, password });
	if (!email || !password || !fullName) {
		return new Response(JSON.stringify({ error: 'Please fill the form properly' }), {
			status: 400
		});
	}
	const user = await db.select().from(users).where(eq(users.email, email));
	const existingUser = user[0];
	if (existingUser) {
		return new Response(JSON.stringify({ error: 'User with this email already exists' }), {
			status: 400
		});
	}
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = await db
		.insert(users)
		.values({ email, password: hashedPassword, name: fullName, role: 'user' })
		.returning();
	return new Response(JSON.stringify({ success: true, data: newUser[0] }), { status: 200 });
};
