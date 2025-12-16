<script lang="ts">
	import type { CollectionItem } from '../../../types/collections';
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '../ui/button';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	let {
		collection,
		handleDelete,
		loading
	}: { collection: CollectionItem; handleDelete: (id: number) => void; loading: boolean } =
		$props();
	let open = $state(false);
</script>

<Card.Root class="flex flex-col overflow-hidden rounded-2xl   shadow-sm transition ">
	<Card.Header class="relative flex h-52 w-full items-center justify-center overflow-hidden ">
		<enhanced:img
			src={collection.thumbnail || '/no-cover.png'}
			alt="Cover"
			class="h-full w-full object-contain p-4 transition-transform duration-300 hover:scale-105"
		/>
	</Card.Header>

	<Card.Content class="px-4 pt-3 pb-2">
		<h3 class="line-clamp-2 text-sm font-semibold text-neutral-100">
			{collection.title}
		</h3>
	</Card.Content>

	<Card.Footer class="px-4 pb-4">
		<Drawer.Root bind:open direction="right">
			<Drawer.Trigger class="w-full">
				<Button variant="outline" class="w-full" onclick={() => (open = true)}>Details</Button>
			</Drawer.Trigger>

			<Drawer.Content class="w-full sm:max-w-md">
				<Drawer.Header class="text-lg font-semibold">
					{collection.title}
				</Drawer.Header>

				<div class="space-y-6 p-4">
					<div class="flex justify-center">
						<enhanced:img
							src={collection.thumbnail || '/no-cover.png'}
							alt="cover"
							class="h-64 rounded-xl bg-neutral-900 object-contain p-4"
						/>
					</div>

					{#if collection.authors?.length}
						<div>
							<p class="mb-2 text-sm text-neutral-400">Authors</p>
							<div class="flex flex-wrap gap-2">
								{#each collection.authors as author, i (i)}
									<span
										class="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
									>
										{author}
									</span>
								{/each}
							</div>
						</div>
					{/if}

					{#if collection.categories?.length}
						<div>
							<p class="mb-2 text-sm text-neutral-400">Categories</p>
							<div class="flex flex-wrap gap-2">
								{#each collection.categories.slice(0, 3) as category, i (i)}
									<span
										class="line-clamp-1 rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300 capitalize"
									>
										{category}
									</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<Drawer.Footer class="border-t border-neutral-800 p-4">
					<Button
						variant="destructive"
						disabled={loading}
						onclick={() => {
							handleDelete(collection.id);
							open = false;
						}}
						class="w-full">Remove</Button
					>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	</Card.Footer>
</Card.Root>
