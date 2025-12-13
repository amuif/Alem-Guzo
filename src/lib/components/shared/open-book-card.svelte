<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { toast } from 'svelte-sonner';
	import type { TrendingBook } from '../../../types/trending-books';
	import { bookCover } from '../../../utils/cover-images';
	import { errorMessage } from '../../../utils/error-message';
	import { Button } from '../ui/button';

	let { book }: { book: TrendingBook } = $props();

	async function handleAddToCollection(book: TrendingBook) {
		try {
			const source = 'openlib';
			const response = await fetch('/api/collection', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ source, book })
			});
			if (!response.ok) {
				const error = await response.json();
				console.log(errorMessage('collection | failed to create'), error);
				toast.error('failed added to collections');
			}
			const state = await response.json();
			if (state.success) {
				toast.success('successfully added to collections');
			}
		} catch (error) {
			console.log(errorMessage('collection | failed to create'), error);
			toast.error('failed added to collections');
		}
	}
</script>

<Card.Root class="flex  flex-col gap-4 rounded-xl border  p-4 shadow-sm">
	<div class="flex h-48 w-full items-center justify-center overflow-hidden rounded-lg">
		<enhanced:img
			src={bookCover(book?.cover_id)}
			alt={book?.authors[0].name}
			class="h-full w-full rounded-md object-contain"
		/>
	</div>

	<div class="flex flex-col gap-1">
		<p class="line-clamp-2 text-sm font-semibold tracking-tight">
			{book?.title}
		</p>
	</div>

	<div class="flex items-center gap-3">
		<p class="line-clamp-1 text-sm font-medium opacity-80">{book.authors[0].name}</p>
	</div>

	<Button
		class="w-full rounded-lg py-2 text-sm font-medium"
		onclick={() => handleAddToCollection(book)}>Add to collection</Button
	>
</Card.Root>
