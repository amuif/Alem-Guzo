<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '../ui/button';
	import type { ItemsInfo } from '../../../types/trending-google-books';
	import { errorMessage } from '../../../utils/error-message';
	import { toast } from 'svelte-sonner';

	let { book }: { book: ItemsInfo } = $props();

	async function handleAddToCollection(book: ItemsInfo) {
		try {
			const source = 'google';
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
			src={book.volumeInfo.imageLinks?.smallThumbnail || ''}
			alt={book.volumeInfo.title}
			class="h-full w-full rounded-md object-contain"
		/>
	</div>

	<div class="flex flex-col gap-1">
		<p class="line-clamp-2 text-sm font-semibold tracking-tight">
			{book.volumeInfo.title}
		</p>
	</div>

	<div class="flex items-center gap-3">
		<p class="line-clamp-1 text-sm font-medium opacity-80">{book.volumeInfo.authors}</p>
	</div>

	<Button
		onclick={() => handleAddToCollection(book)}
		class="w-full rounded-lg py-2 text-sm font-medium">Add to collection</Button
	>
</Card.Root>
