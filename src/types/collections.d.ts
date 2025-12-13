import type { TrendingBook } from "./trending-books";
import type { ItemsInfo } from "./trending-google-books";

export interface CollectionItem {
  source: string;
  source_id: string;
  title: string;
  authors: string[];
  thumbnail: string | null;
  categories: string[];
  published_year: string | null;
  metadata: TrendingBook | ItemsInfo
}
