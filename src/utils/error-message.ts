export type Feature = 'collection' | 'library' | 'auth';
export type ErrorMessage = 'failed to create' | 'failed to get' | 'failed to delete';
export type ErrorMessageType = `${Feature} | ${ErrorMessage}`;

export const errorMessage = (event: ErrorMessageType) => {
	console.log(event);
};
