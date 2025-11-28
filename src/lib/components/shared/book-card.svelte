<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '../ui/button';
	import type { ItemsInfo } from '../../../types/trending-google-books';

	let { book }: { book: ItemsInfo } = $props();
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

	<Button class="w-full rounded-lg py-2 text-sm font-medium">Add to collection</Button>
</Card.Root>
