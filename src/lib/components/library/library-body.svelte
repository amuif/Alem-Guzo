<script lang="ts">
	import { onMount } from 'svelte';
	import type { ItemsInfo } from '../../../types/trending-google-books';
	import { selectedCatagory } from '$lib/store/catagory-state';
	import BookCard from '../shared/book-card.svelte';
	import { layoutState } from '$lib/store/layout-state';

	let books: ItemsInfo[] = $state([]);
	onMount(async () => {
		try {
			const data = await fetch('/api/library');
			if (!data.ok) {
				console.log('Error at library body');
			}
			books = await data.json();
			console.log('books', books);
		} catch (error) {
			console.log('Error at library body', error);
		}
	});
</script>

<section class="flex-col gap-3 space-y-4">
	<div
		class={` gap-3 ${$layoutState === 'GRID' ? 'grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4' : 'flex-col space-y-2.5'}`}
	>
		{#each books?.filter((book) => {
			if (!$selectedCatagory || $selectedCatagory === 'all') return true;
			if (!book?.volumeInfo?.categories) return false;

			return book.volumeInfo.categories.some((category: string) => category
					.toLowerCase()
					.includes($selectedCatagory.toLowerCase()));
		}) as book, index (index)}
			<BookCard {book} />
		{/each}
	</div>
</section>
