export interface GoogleBooks {
	kind: string;
	totalItems?: number;
	items: ItemsInfo[];
}
export interface ItemsInfo {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: VolumeInfo;
	saleInfo?: SaleInfo;
	accessInfo?: AccessInfo;
}

export interface VolumeInfo {
	title: string;
	authors?: string[];
	publisher?: string;
	publishedDate?: string;
	description?: string;
	categories?: string[];
	pageCount?: number;
	averageRating?: number;
	ratingsCount?: number;

	imageLinks?: {
		smallThumbnail?: string;
		thumbnail?: string;
	};
}

export interface AccessInfo {
	country: string;
	viewability: string;
	embeddable: boolean;
	publicDomain: boolean;
	webReaderLink?: string;
}

export interface SaleInfo {
	country: string;
	saleability: string;
	isEbook: boolean;
}
