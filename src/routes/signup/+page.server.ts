import { auth } from '$lib/server/auth';
import type { Actions } from './$types';

export const actions: Actions = {
	signup: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const name = data.get('fullName') as string;
		const password = data.get('password') as string;

		try {
			const response = await auth.api.signUpEmail({
				body: { email, name, password }
			});
			if (!response.user) {
				return { success: false, message: 'Error creating user' };
			}
			console.log(response);
			return { success: true, message: `Welcome ${response.user.name}!` };
		} catch (err) {
			console.error('Signup error:', err);
			return { success: false, message: 'Signup failed' };
		}
	}
};
