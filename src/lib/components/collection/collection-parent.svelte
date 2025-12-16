<script lang="ts">
	import { onMount } from 'svelte';
	import type { CollectionItem } from '../../../types/collections';
	import CollectionCard from './collection-card.svelte';
	import Spinner from '../ui/spinner/spinner.svelte';
	import { toast } from 'svelte-sonner';
	import { errorMessage } from '../../../utils/error-message';

	let collections: CollectionItem[] = $state([]);
	let loading = $state(false);

	async function fetchCollections() {
		const response = await fetch('/api/collection', {
			method: 'GET'
		});
		collections = await response.json();
		console.log(collections);
	}
	onMount(fetchCollections);
	const handleDelete = async (id: number) => {
		loading = true;
		try {
			const response = await fetch('/api/collection', {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id: id })
			});
			if (response.ok) {
				toast.success('Successfully removed');
        fetchCollections()
			}
		} catch (err) {
			console.log(errorMessage('collection | failed to get'), err);
		} finally {
			loading = false;
		}
	};
</script>

<section class="w-full flex-col space-y-4">
	<div class="">
		<h5>Your saved books</h5>
	</div>
	<div class="h-full w-full">
		{#if collections?.length === 0}
			<Spinner />
		{/if}
		{#if collections != null}
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#each collections as collection, i (i)}
					<CollectionCard {collection} {handleDelete} {loading} />
				{/each}
			</div>
		{/if}
	</div>
</section>
