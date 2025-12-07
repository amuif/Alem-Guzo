<script lang="ts">
	import { onMount } from 'svelte';
	import BookCard from '../shared/book-card.svelte';
	import type { ItemsInfo } from '../../../types/trending-google-books';
	import { layoutState} from '$lib/store/layout-state';

	let books: ItemsInfo[] = $state([]);
	let { amount }: { amount: string } = $props();
	onMount(async () => {
		const res = await fetch('/api/reviewed');
		books = (await res.json()).items?.slice(0, amount);
	});
</script>

<section>
	<h4 class="py-3 font-bold">Popular Books</h4>
	<div
		class={` gap-3 ${$layoutState === 'GRID' ? 'grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4' : 'flex-col space-y-2.5'}`}
	>
		{#each books as book (book.id)}
			<BookCard {book} />
		{/each}
	</div>
</section>
