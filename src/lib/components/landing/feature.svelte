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

<section id="catagories" class="min-h-[80dvh] flex-col space-y-8 px-4 py-16 lg:px-8">
	<h2
		class="text-2xl font-semibold tracking-tight text-neutral-900 lg:text-4xl dark:text-neutral-100"
	>
		Featured Categories
	</h2>

	<div class="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-4 lg:pt-10">
		{#each categories as { id, image, title } (id)}
			<div
				class="group relative overflow-hidden rounded-2xl bg-neutral-900 text-white shadow-md transition-all duration-300 hover:scale-[1.02] dark:bg-neutral-100 dark:text-black"
			>
				<!-- Monochrome image with subtle overlay -->
				<img
					src={image}
					alt={title}
					class="aspect-square h-80 w-full object-cover opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
				/>

				<!-- Overlay text -->
				<div
					class="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 dark:from-white/70 dark:via-white/20 dark:to-transparent"
				>
					<h6 class="text-lg font-semibold tracking-tight">{title}</h6>
				</div>
			</div>
		{/each}
	</div>
</section>
