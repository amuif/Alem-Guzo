<script lang="ts">
	import { onMount } from 'svelte';
	import { layoutState } from '$lib/store/layout-state';
	import OpenBookCard from '../shared/open-book-card.svelte';
	import type { TrendingBook } from '../../../types/trending-books';
	import { selectedCatagory } from '$lib/store/catagory-state';
	import Pagination from '../shared/pagination.svelte';
	import { page } from '$app/stores';

	let books: TrendingBook[] = $state([]);
	onMount(async () => {
		try {
			const data = await fetch('/api/library');
			if (!data.ok) {
				console.log('Error at library body', data.status, 'text', data.statusText);
			}
			books = await data.json();
		} catch (error) {
			console.log('Error at library body', error);
		}
	});

	const perPage = 16;

	const currentPage = $derived(parseInt($page.url.searchParams.get('page') || '1'));
	const start = $derived((currentPage - 1) * perPage);
	const end = $derived(start + perPage);
</script>
<section class="flex-col gap-3 space-y-4">
	<div
		class={`gap-3 ${
			$layoutState === 'GRID'
				? 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'
				: 'flex-col space-y-2.5'
		}`}
	>
		{#each books
			?.filter((book) => {
				if ($selectedCatagory === 'all') return true;
				return book.subject?.some((s) => s.toLowerCase().includes($selectedCatagory.toLowerCase()));
			})
			.slice(start, end) as book, index (index)}
			<OpenBookCard {book} />
		{/each}
	</div>

	<div>
		<Pagination count={books?.length} {perPage} />
	</div>
</section>
