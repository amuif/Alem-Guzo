<script lang="ts">
	import { onMount } from 'svelte';
	import featureBg from '../../assets/featureBg.jpg';
	import type { ItemsInfo } from '../../../types/trending-google-books';
	import { Button } from '../ui/button';
	let book: ItemsInfo;
	onMount(async () => {
		const response = await fetch('/api/daily');
		book = await response.json();
	});
</script>

<section class="relative !text-white h-full w-full">
	<enhanced:img
		src={featureBg}
		alt="feeature card"
		class="absolute inset-0 h-full w-full rounded-lg object-cover brightness-50"
	/>
	<div class="relative  flex-col gap-4 p-5">
		<h4 class="text-lg font-bold lg:text-2xl">Trending Book </h4>
		<div class="flex items-center justify-between">
			<div class=" w-2/3 flex-col gap-4">
				<h3 class="line-clamp-2 text-2xl font-bold">{book?.volumeInfo?.title}</h3>
				<p class="line-clamp-3 pt-5 text-sm">{book?.volumeInfo?.description}</p>
			</div>
			<enhanced:img
				src={book?.volumeInfo?.imageLinks?.thumbnail || '/no-cover.png'}
				class=" h-48 w-1/3 rounded-lg object-contain"
			/>
		</div>
		<div class="absolute flex items-center justify-start">
			<Button>Read more</Button>
		</div>
	</div>
</section>
