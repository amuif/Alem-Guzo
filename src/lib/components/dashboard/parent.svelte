<script>
	import PopularBooks from '../shared/popular-books.svelte';
	import FeatureCard from './feature-card.svelte';
</script>

<section class="flex min-h-screen w-full flex-col">
	<div class="flex h-72 w-full flex-col items-center justify-between gap-1 md:flex-row">
		<div class="h-full w-full"><FeatureCard /></div>
	</div>

	<div class="">
		<PopularBooks />
	</div>
</section>
