<script>
	import { Telescope } from '@lucide/svelte';
	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';
</script>

<div class="flex min-h-screen w-full items-center justify-between px-5">
	<div class="hidden h-full lg:block">
		<img src="/landing.png" alt="landing " class="aspect-square h-[550px]" />
	</div>
	<div class="h-full flex-col items-center justify-center space-y-4">
		<div class="w-full">
			<Input placeholder="Search for books....." size={50} class="h-14" />
		</div>
		<div class=" justify-r flex-col items-center justify-between space-y-4">
			<h1 class="text-2xl font-bold md:text-4xl lg:text-5xl">
				Looking for special books?<br /> Discover the unfound
			</h1>
			<div class="text-lg">
				<p>Unearth rare and timeless books from around the world.</p>
				<p>Find stories that history almost forgot.</p>
			</div>
		</div>
		<div class="flex gap-3">
			<Button variant="outline" size="lg" class="h-14 text-base"
				>Start exploring <Telescope /></Button
			>
			<Button variant="ghost" class="h-14 text-base">Browse collection</Button>
		</div>
	</div>
</div>

<style>
</style>
