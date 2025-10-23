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
		if (index === 1) {
			return (index = testimonials.length);
		}
		index--;
	}
	function handleForward() {
		console.log(index, testimonials.length);
		if (index == testimonials.length) {
			return (index = 1);
		}
		index++;
	}
</script>

{#snippet testimonyDisplay(testimony: TestimonialCard)}
	<div class=" pt-4">
		<div class="mx-auto w-full flex-col justify-between space-y-5 text-center lg:w-3/4">
			<p class="text-lg">
				"{testimony.testimony}"
			</p>
			<p class="mt-auto text-center font-bold">{testimony.name}</p>
		</div>
	</div>
{/snippet}

<section class="flex justify-between p-5">
	<div class=" w-full flex-col items-center justify-center">
		<h2 class="text-center text-lg font-bold lg:text-6xl">What people say about our services?</h2>
		<div class="mx-auto w-full flex-col items-center justify-center lg:w-3/4">
			<div class="mt-auto flex h-full items-center justify-center pt-5">
				{#each testimonials as testimony (testimony.id)}
					{#if testimony.id === index}
						{@render testimonyDisplay(testimony)}
					{/if}
				{/each}
			</div>
			<div class="mx-auto flex w-full items-center justify-center space-x-5 pt-5">
				<Button class="rounded-full" onclick={handleBackward}><ArrowLeft /></Button>
				<Button class="rounded-full" onclick={handleForward}><ArrowRight /></Button>
			</div>
		</div>
	</div>
</section>
