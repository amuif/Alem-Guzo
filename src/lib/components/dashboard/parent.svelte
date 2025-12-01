<script>
	import FeatureCard from './feature-card.svelte';
	import PopularBooks from './popular-books.svelte';
</script>

<section class="flex min-h-screen w-full flex-col">
	<div class="flex h-72 w-full flex-col items-center justify-between gap-1 md:flex-row">
		<div class="h-full w-full  md:w-2/3"><FeatureCard/></div>
		<div class="hidden md:block h-full w-full bg-indigo-800 md:w-1/3"></div>
	</div>

	<div class="">
		<PopularBooks />
	</div>
</section>
