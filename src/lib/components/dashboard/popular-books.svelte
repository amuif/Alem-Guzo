<script lang="ts" module>
	let books: TrendingBook[];
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { TrendingBook } from '../../../types/trending-books';

	onMount(async () => {
		const res = await fetch('/api/trending');
		books = (await res.json()).works;
	});
	const cover = (id?: number) =>
		id ? `https://covers.openlibrary.org/b/id/${id}-L.jpg` : '/no-cover.png';
</script>

<section>
	<h4 class="font-bold">Popular Books</h4>
	{#each books as book (book.key)}
		{console.log(book)}
		<img src={cover(book.cover_i)} alt="Book" />
	{/each}
</section>
