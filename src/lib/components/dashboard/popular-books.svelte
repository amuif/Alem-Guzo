<script lang="ts">
	import { onMount } from 'svelte';
	import type { TrendingBook } from '../../../types/trending-books';
	import BookCard from '../shared/book-card.svelte';
	import { bookCover } from '../../../utils/cover-images';

	let books: TrendingBook[];
	onMount(async () => {
		const res = await fetch('/api/trending');
		books = (await res.json()).works?.slice(0, 8);
		console.log(books);
	});
</script>

<section>
	<h4 class="py-3 font-bold">Popular Books</h4>
	<div class="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
		{#each books as book (book.key)}
			<BookCard {book} cover={bookCover(book.cover_i)} />
		{/each}
	</div>
</section>
