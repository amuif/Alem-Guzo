<script lang="ts">
	import { onMount } from 'svelte';
	import BookCard from '../shared/book-card.svelte';
	import type { ItemsInfo } from '../../../types/trending-google-books';

	let books: ItemsInfo[];
	onMount(async () => {
		const res = await fetch('/api/reviewed');
		books = (await res.json()).items?.slice(0, 8);
	});
</script>

<section>
	<h4 class="py-3 font-bold">Popular Books</h4>
	<div class="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
		{#each books as book (book.id)}
			<BookCard {book} />
		{/each}
	</div>
</section>
