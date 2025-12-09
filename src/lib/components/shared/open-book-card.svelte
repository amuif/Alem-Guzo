<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import type { TrendingBook } from '../../../types/trending-books';
	import { bookCover } from '../../../utils/cover-images';
	import { Button } from '../ui/button';

	let { book }: { book: TrendingBook } = $props();
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

	<Button class="w-full rounded-lg py-2 text-sm font-medium">Add to collection</Button>
</Card.Root>
