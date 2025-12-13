import type { CollectionItem } from "../types/collections";
import type { TrendingBook } from "../types/trending-books";
import type { ItemsInfo } from "../types/trending-google-books";

export function normalizeGoogleBook(book: ItemsInfo): CollectionItem {
  const info = book.volumeInfo ?? {};

  return {
    source: "google",
    source_id: book.id,
    title: info.title ?? "",
    authors: info.authors ?? [],
    thumbnail: info.imageLinks?.thumbnail ?? null,
    categories: info.categories?.slice(0, 5) ?? [],
    published_year: info.publishedDate?.slice(0, 4) ?? null,
    metadata: book
  };
}

export function normalizeOpenLibraryBook(book: TrendingBook): CollectionItem {
  return {
    source: "openlib",
    source_id: book.key.replace("/works/", ""),
    title: book.title || "",
    authors: book.author_name ?? [],
    thumbnail: book.cover_id
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
      : null,
    categories: book.subject?.slice(0, 5) ?? [],
    published_year: book.first_publish_year?.toString() ?? null,
    metadata: book
  };
}
