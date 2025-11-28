export const bookCover = (id?: number) =>
	id ? `https://covers.openlibrary.org/b/id/${id}-L.jpg` : '/no-cover.png';

export const authorPhoto = (size: string, authorId?: string) =>
	authorId ? `https://covers.openlibrary.org/a/olid/${authorId}-${size}.jpg` : '/no-author.png';
