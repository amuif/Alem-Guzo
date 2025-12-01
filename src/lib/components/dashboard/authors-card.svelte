<script lang="ts">
	import { onMount } from 'svelte';
	import type { OpenLibraryAuthorDoc } from '../../../types/authors';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { authorPhoto } from '../../../utils/cover-images';
	import { Button } from '../ui/button';

	let authors: OpenLibraryAuthorDoc[];
	onMount(async () => {
		const response = await fetch('/api/authors');
		authors = (await response.json()).docs?.slince(0, 3);
	});
</script>

<section class="flex-col gap-2">
	<h5>Trending Author</h5>
	{#each authors as author (author?.key)}
		<div class="flex items-center justify-between">
			<Avatar.Root>
				<Avatar.Image src={authorPhoto(author?.key)} alt="author" />
				<Avatar.Fallback>{author?.name[0]}</Avatar.Fallback>
			</Avatar.Root>
			<p>{author?.name}</p>
			<Button>More</Button>
		</div>
	{/each}
</section>
