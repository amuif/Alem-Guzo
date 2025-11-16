export interface User {
	name: string;
	image?: string | null | undefined;
	email: string;
	emailVerified: boolean;
	// role: string;
	createdAt: Date;
	updatedAt: Date;
}
