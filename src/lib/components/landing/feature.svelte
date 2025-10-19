<script lang="ts">
	import type { FeatureCard } from '../../../types/features';

	const categories: FeatureCard[] = [
		{
			id: 1,
			title: 'Fiction & Non-fiction',
			image: '/fiction.jpg'
		},
		{
			id: 2,
			title: 'Fantasy',
			image: '/fantasy.jpg'
		},
		{
			id: 3,
			title: 'Mystery',
			image: '/mystery.jpg'
		},
		{
			id: 4,
			title: 'Romance',
			image: '/romance.jpg'
		}
	];
</script>

<section class="flex-col space-y-5 bg-primary p-5">
	<h2 class="text-lg font-bold lg:text-2xl">Featured Categories</h2>
	<div class="grid grid-cols-1 justify-between space-x-5 md:grid-cols-2 lg:grid-cols-4">
		{#each categories as { id, image, title } (id)}
			<div class="relative flex-col space-y-4">
				<img src={image} alt={title} class="aspect-square h-72 rounded-lg object-cover" />
				<h6 class="absolute bottom-9 left-3 font-extrabold">{title}</h6>
			</div>
		{/each}
	</div>
</section>
