<script lang="ts" module>
	import { Button } from '../ui/button';
	import { Input } from '../ui/input';
	import { IconLayout2, IconList } from '@tabler/icons-svelte';
	import * as ButtonGroup from '$lib/components/ui/button-group/index';
	import { layoutState, toggleLayout } from '$lib/store/layout-state';
	import { selectedCatagory, selectCatagory } from '$lib/store/catagory-state';
	import { catagories } from '$lib/data/catagories';
</script>

<script lang="ts">
	let searchQuery: string = $state('');
</script>

<section class="w-full pt-2">
	<div class="flex items-center justify-between gap-2">
		<div class="mx-auto flex h-14 w-full gap-2 md:w-1/2">
			<Input placeholder="Search for a book" bind:value={searchQuery} class="w-full" />
			<Button>Search</Button>
		</div>
		<div class="h-14">
			<ButtonGroup.Root>
				<Button
					variant={`${$layoutState === 'GRID' ? 'default' : 'outline'}`}
					onclick={toggleLayout}><IconLayout2 /></Button
				>
				<Button
					variant={`${$layoutState === 'LIST' ? 'default' : 'outline'}`}
					onclick={toggleLayout}><IconList /></Button
				>
			</ButtonGroup.Root>
		</div>
	</div>
	<div class="flex flex-wrap items-center justify-center gap-2">
		{#each catagories as catagory (catagory)}
			<Button
				variant={$selectedCatagory === catagory ? 'default' : 'outline'}
				onclick={()=>selectCatagory(catagory)}
				class="capitalize">{catagory}</Button
			>
		{/each}
	</div>
</section>
