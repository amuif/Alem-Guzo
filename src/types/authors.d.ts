export interface OpenLibraryAuthorSearchResponse {
	numFound: number;
	start: number;
	numFoundExact?: boolean;
	docs: OpenLibraryAuthorDoc[];
}

export interface OpenLibraryAuthorDoc {
	key: string;
	name: string;
	birth_date?: string;
	death_date?: string;
	top_work?: string;
	work_count?: number;
	top_subjects?: string[];
	alternate_names?: string[];
	type?: 'author';
	_version_?: number;
}
