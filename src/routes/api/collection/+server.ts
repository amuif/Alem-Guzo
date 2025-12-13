import type { RequestHandler } from "@sveltejs/kit";
import { errorMessage } from "../../../utils/error-message";
import { normalizeGoogleBook, normalizeOpenLibraryBook } from "../../../utils/normalising";
import type { CollectionItem } from "../../../types/collections";
import { dbExport } from "$lib/server/db";
import { collections } from "$lib/server/db/schema";

export const POST: RequestHandler = async ({ request }) => {
  let collection: CollectionItem
  try {

    const { source, book } = await request.json()

    if (!source) return new Response(JSON.stringify({ error: "Book data is required" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
    if (!book) {
      return new Response(JSON.stringify({ error: "Book data is required" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    if (source === 'openlib') {
      collection = normalizeOpenLibraryBook(book)
    } else {
      collection = normalizeGoogleBook(book)
    }
    const result = await dbExport.insert(collections).values({
      source: collection.source,
      source_id: collection.source_id,
      title: collection.title,
      thumbnail: collection.thumbnail,
      authors: collection.authors,
      published_year: collection.published_year,
      categories: collection.categories,
      metadata: collection.metadata,
    }).returning()
    console.log(result)
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.log(errorMessage('collection | failed to create'), err)
    return new Response(JSON.stringify({ error: "Failed to save", details: err }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

