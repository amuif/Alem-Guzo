<script lang="ts">
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';
	import type { TestimonialCard } from '../../../types/testimonial';
	import Button from '../ui/button/button.svelte';

	let index = $state(1);

	const testimonials: TestimonialCard[] = [
		{
			id: 1,
			name: 'Sarah Thompson',
			testimony:
				'OpenBook has completely changed the way I discover books! The recommendations are always spot-on, and I love how easy it is to find both classics and new releases.'
		},
		{
			id: 2,
			name: 'David Kim',
			testimony:
				'As a huge reader, I’ve tried many platforms — but OpenBook stands out. The clean design and massive collection make it my go-to place for finding my next read.'
		},
		{
			id: 3,
			name: 'Emily Rodriguez',
			testimony:
				'I’m amazed by how user-friendly OpenBook is. I can save my favorite titles, explore by genre, and even discover rare books I never knew existed!'
		},
		{
			id: 4,
			name: 'Michael Carter',
			testimony:
				'This platform is perfect for book lovers like me. It’s fast, beautiful, and has every author I’ve searched for. Highly recommended!'
		},
		{
			id: 5,
			name: 'Aisha Mohammed',
			testimony:
				'OpenBook helped me rediscover my love for reading. The interface is so smooth, and I love how it connects me with books I actually enjoy.'
		}
	];

	function handleBackward() {
		index = index === 1 ? testimonials.length : index - 1;
	}

	function handleForward() {
		index = index === testimonials.length ? 1 : index + 1;
	}
</script>

{#snippet testimonyDisplay(testimony: TestimonialCard)}
	<div class="mx-auto w-full flex-col justify-between space-y-6 text-center lg:w-3/4">
		<p class="text-base text-neutral-600 italic dark:text-neutral-400">
			"{testimony.testimony}"
		</p>
		<p class="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">
			— {testimony.name}
		</p>
	</div>
{/snippet}

<section id="testimony" class="flex justify-between px-4 py-20 lg:px-8">
	<div class="w-full flex-col items-center justify-center space-y-10">
		<h2
			class="text-center text-2xl font-semibold tracking-tight text-neutral-900 lg:text-5xl dark:text-neutral-100"
		>
			What people say about our services
		</h2>

		<div
			class="relative mx-auto w-full flex-col items-center justify-center rounded-2xl bg-neutral-100 p-8 shadow-md lg:w-3/4 dark:bg-neutral-900"
		>
			<div class="flex h-full items-center justify-center">
				{#each testimonials as testimony (testimony.id)}
					{#if testimony.id === index}
						{@render testimonyDisplay(testimony)}
					{/if}
				{/each}
			</div>

			<!-- Controls -->
			<div class="mx-auto mt-10 flex items-center justify-center space-x-5">
				<Button
					class="rounded-full bg-neutral-900 text-white transition-all hover:scale-105 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					onclick={handleBackward}
				>
					<ArrowLeft />
				</Button>

				<Button
					class="rounded-full bg-neutral-900 text-white transition-all hover:scale-105 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					onclick={handleForward}
				>
					<ArrowRight />
				</Button>
			</div>
		</div>
	</div>
</section>
