<script lang="ts">
	import { Telescope } from '@lucide/svelte';

	const aboutText = `
Alem Guzo is a modern reading platform that leverages the OpenBooks API to help book lovers discover, track, and explore a wide variety of books. Whether you're into fiction, non-fiction, fantasy, or romance, Alem Guzo provides personalized recommendations, detailed book information, and a seamless reading experience.
`;

	const features = [
		{
			title: 'Discover Books',
			description: 'Find rare and popular books easily using the power of the OpenBooks API.',
			icon: Telescope
		},
		{
			title: 'Personalized Recommendations',
			description: 'Get suggestions tailored to your reading preferences and history.',
			icon: Telescope
		},
		{
			title: 'Track Your Reads',
			description: 'Keep track of the books you’ve read and create a digital library of your own.',
			icon: Telescope
		}
	];
</script>

<section id="about" class="px-6 py-16">
	<div class="mx-auto max-w-7xl space-y-12 rounded-2xl p-8 text-neutral-900 dark:text-neutral-100">
		<h2 class="text-center text-3xl font-bold lg:text-5xl">About Alem Guzo</h2>

		<div class="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
			<p>{aboutText}</p>
		</div>

		<div class="grid gap-8 pt-8 md:grid-cols-3">
			{#each features as { title, description, icon } (title)}
				<div
					class="flex flex-col items-center space-y-4 rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
				>
					<svelte:component this={icon} class="h-10 w-10 text-neutral-900 dark:text-white" />
					<h3 class="text-xl font-bold">{title}</h3>
					<p class="text-neutral-700 dark:text-neutral-300">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
