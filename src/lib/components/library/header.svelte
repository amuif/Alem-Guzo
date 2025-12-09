<script lang="ts" module>
	import { Button } from '../ui/button';
	import { Input } from '../ui/input';
	import { IconLayout2, IconList } from '@tabler/icons-svelte';
	import * as ButtonGroup from '$lib/components/ui/button-group/index';
	import { layoutState } from '$lib/store/layout-state';
	import { selectedCatagory, selectCatagory } from '$lib/store/catagory-state';
	import { catagories } from '$lib/data/catagories';
	import { goto } from '$app/navigation';
</script>

<script lang="ts">
	let searchQuery: string = $state('');
	function goTo(pageNum: number) {
		goto(`?page=${pageNum}`, { keepFocus: true, noScroll: true });
	}
	function handleSearch() {
		goto(`?page=1&search=${searchQuery}`, { keepFocus: true, noScroll: true });
	}
</script>

<section class="w-full pt-2">
	<div class="flex items-center justify-between gap-2">
		<div class="mx-auto flex h-14 w-full gap-2 md:w-1/2">
			<Input placeholder="Search for a book" bind:value={searchQuery} class="w-full" />
			<Button onclick={handleSearch} disabled={searchQuery.trim().length === 0}>Search</Button>
		</div>
		<div class="h-14">
			<ButtonGroup.Root>
				<Button
					variant={`${$layoutState === 'GRID' ? 'default' : 'outline'}`}
					onclick={() => layoutState.set('GRID')}><IconLayout2 /></Button
				>
				<Button
					variant={`${$layoutState === 'LIST' ? 'default' : 'outline'}`}
					onclick={() => layoutState.set('LIST')}><IconList /></Button
				>
			</ButtonGroup.Root>
		</div>
	</div>
	<div class="flex flex-wrap items-center justify-center gap-2">
		{#each catagories as catagory (catagory)}
			<Button
				variant={$selectedCatagory === catagory ? 'default' : 'outline'}
				onclick={() => {
					selectCatagory(catagory);
					goTo(1);
				}}
				class="capitalize">{catagory}</Button
			>
		{/each}
	</div>
</section>
