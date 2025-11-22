<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import type { TrendingBook } from '../../../types/trending-books';
	import { authorPhoto } from '../../../utils/cover-images';
	import { Button } from '../ui/button';

	let { book, cover }: { book: TrendingBook; cover: string } = $props();
</script>

<Card.Root class="flex  flex-col gap-4 rounded-xl border  p-4 shadow-sm">
	<div class="flex h-48 w-full items-center justify-center overflow-hidden rounded-lg">
		<img src={cover} alt={book.title} class="h-full w-full rounded-md object-contain" />
	</div>

	<div class="flex flex-col gap-1">
		<p class="line-clamp-2 text-sm font-semibold tracking-tight">
			{book.title}
		</p>
	</div>

	<div class="flex items-center gap-3">
		<Avatar.Root class="rounded-full border">
			<Avatar.Image src={authorPhoto('S', book.author_key[0])} alt="Author" />
			<Avatar.Fallback>A</Avatar.Fallback>
		</Avatar.Root>
		<p class="line-clamp-1 text-sm font-medium opacity-80">{book.author_name}</p>
	</div>

	<Button class="w-full rounded-lg py-2 text-sm font-medium">Add to collection</Button>
</Card.Root>
