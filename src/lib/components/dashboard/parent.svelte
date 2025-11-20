<script>
	import PopularBooks from './popular-books.svelte';
</script>

<section class="grid h-[90dvh] w-full grid-cols-1 gap-4 px-2 md:grid-cols-4">
	<div class="col-span-1 h-full w-full flex-col items-center md:col-span-3">
		<div class="h-2/5 bg-red-500"></div>
		<div class="h-3/5"><PopularBooks /></div>
	</div>
	<div class=" h-full w-full flex-col items-center bg-amber-500">
		<div class="h-1/2 bg-purple-400"></div>
		<div class="h-1/2 bg-indigo-800"></div>
	</div>
</section>
