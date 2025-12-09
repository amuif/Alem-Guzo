<script lang="ts" module>
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { ChevronLeftIcon, ChevronRightIcon } from '@lucide/svelte';
	import { Button } from '../ui/button';
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let perPage = 20;
	export let count: number;

	$: current = parseInt($page.url.searchParams.get('page') || '1');
	$: totalPages = Math.ceil(count / perPage);

	function goTo(pageNum: number) {
		goto(`?page=${pageNum}`, { keepFocus: true, noScroll: true });
	}

	function handleNext() {
		if (current < totalPages) goTo(current + 1);
	}

	function handlePrev() {
		if (current > 1) goTo(current - 1);
	}
</script>

<Pagination.Root {count} {perPage} page={current}>
	{#snippet children({ pages})}
		<Pagination.Content>
			<Pagination.Item>
				<Button size="default" variant="ghost" onclick={handlePrev} disabled={current === 1}>
					<ChevronLeftIcon class="size-4" />
					Prev
				</Button>
			</Pagination.Item>

			{#each pages as page (page.key)}
				{#if page.type === 'ellipsis'}
					<Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
				{:else}
					<Pagination.Item>
						<Pagination.Link
							{page}
							isActive={current === page.value}
							onclick={() => goTo(page.value)}
						>
							{page.value}
						</Pagination.Link>
					</Pagination.Item>
				{/if}
			{/each}

			<Pagination.Item>
				<Button size="default" variant="ghost" onclick={handleNext} disabled={current === totalPages}>
					Next
					<ChevronRightIcon class="size-4" />
				</Button>
			</Pagination.Item>
		</Pagination.Content>
	{/snippet}
</Pagination.Root>
