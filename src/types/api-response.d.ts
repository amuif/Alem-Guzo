import type { User } from './user';

export interface ApiResponse<T = unknown> {
	success: boolean;
	data: T;
	message: string;
}
export interface AuthResponse {
	success: boolean;
	user: User | [];
	token: string | null;
}
