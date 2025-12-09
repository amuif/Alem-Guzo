export interface OpenLibraryResult {
	query: 'string';
	works: TrendingBook[];
	days: number;
	hours: number;
}
export interface TrendingBook {
	authors: Authors[];
	author_name: string[];
	cover_edition_key?: string;
	cover_id?: number;
	ebook_access?: string;
	edition_count: number;
	first_publish_year?: number;
	has_fulltext: boolean;
	ia?: string[];
	ia_collection_s?: string;
	subject: string[];
	key: string;
	language?: string[];
	public_scan_b: boolean;
	title: string;
	editions?: TrendingBookEditions;
}
export interface Authors {
	key: string;
	name: string;
}
export interface TrendingBookEditions {
	numFound: number;
	start: number;
	numFoundExact: boolean;
	docs: EditionDoc[];
}

export interface EditionDoc {
	key: string;
	title: string;
	subtitle?: string;
	cover_i?: number;
	language?: string[];
	ia?: string[];
	ebook_access?: string;
	has_fulltext: boolean;
	public_scan_b: boolean;
	providers?: Provider[];
	availability?: Availability;
}

export interface Provider {
	access: string;
	format: string;
	price: number | null;
	url: string;
	provider_name: string;
}

export interface Availability {
	status: string;
	available_to_browse: boolean;
	available_to_borrow: boolean;
	available_to_waitlist: boolean;
	is_printdisabled: boolean;
	is_readable: boolean;
	is_lendable: boolean;
	is_previewable: boolean;
	identifier?: string;
	isbn?: string;
	oclc?: string | null;
	openlibrary_work?: string;
	openlibrary_edition?: string;
	last_loan_date?: string | null;
	num_waitlist?: number | null;
	last_waitlist_date?: string | null;
	is_restricted: boolean;
	is_browseable: boolean;
	__src__?: string;
}
