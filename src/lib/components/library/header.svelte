<script lang="ts" module>
	import { Button } from '../ui/button';
	import { Input } from '../ui/input';
	import { IconLayout2, IconList } from '@tabler/icons-svelte';
	import * as ButtonGroup from '$lib/components/ui/button-group/index';
</script>

<script lang="ts">
	let searchQuery: string;
	let viewMode: 'Grid' | 'List' = 'Grid';

	function toggleView() {
		if (viewMode === 'Grid') {
			viewMode = 'List';
		} else {
			viewMode = 'Grid';
		}
	}
</script>

<section class="w-full">
	<div class="flex items-center justify-between">
		<div class="flex gap-2">
			<Input placeholder="Search for a book" bind:value={searchQuery} />
			<Button>Search</Button>
		</div>
		<div>
			<ButtonGroup.Root>
				<Button variant={`${viewMode === 'Grid' ? 'default' : 'outline'}`} onclick={toggleView}
					><IconLayout2 /></Button
				>
				<Button variant={`${viewMode === 'List' ? 'default' : 'outline'}`} onclick={toggleView}><IconList /></Button>
			</ButtonGroup.Root>
		</div>
	</div>
</section>
