<script>
	import Skeleton from './Skeleton.svelte';
</script>

{#snippet thumbnail()}
	<div class="thumbnail wrapper">
		<div class="image"></div>
		<div class="title"></div>
	</div>
{/snippet}

<Skeleton>
	<div class="wrapper grid">
		{#each Array(20)}
			{@render thumbnail()}
		{/each}
	</div>
</Skeleton>

<style>
	.grid {
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

		.thumbnail {
			display: grid;
			gap: 16px;
			.image {
				width: 100%;
				aspect-ratio: 16/9;
				height: 192px;
			}
			.title {
				height: 8px;
				width: 70%;
			}
		}
	}
</style>
