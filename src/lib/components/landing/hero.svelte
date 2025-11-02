<script>
	import { Telescope } from '@lucide/svelte';
	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';
</script>

<section
	id="hero"
	class="flex min-h-screen w-full flex-col-reverse items-center justify-center gap-10 px-5 py-10 lg:flex-row lg:justify-between lg:px-12"
>
	<div class="flex flex-col space-y-8 text-center lg:w-1/2 lg:text-left">
		<div class="mx-auto w-full max-w-md lg:mx-0">
			<Input
				placeholder="Search for books..."
				class="h-14 rounded-full border border-neutral-300 bg-neutral-50 px-5 text-base text-neutral-900 shadow-sm focus:border-neutral-500 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
			/>
		</div>

		<div class="flex flex-col space-y-3">
			<h1
				class="text-3xl leading-tight font-semibold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl dark:text-neutral-100"
			>
				Looking for special books?<br />
				<span class="text-neutral-500 dark:text-neutral-400">Discover the unfound.</span>
			</h1>

			<p class="max-w-md text-base text-neutral-600 lg:max-w-lg dark:text-neutral-400">
				Unearth rare and timeless books from around the world.<br />
				Find stories that history almost forgot.
			</p>
		</div>

		<!-- Buttons -->
		<div class="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
			<Button
				variant="outline"
				size="lg"
				class="h-14 rounded-full border border-neutral-800 bg-neutral-900 px-6 text-base font-medium text-white transition-all hover:scale-105 hover:bg-neutral-800 dark:border-neutral-200 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-200"
			>
				Start exploring <Telescope class="ml-2 h-5 w-5" />
			</Button>

			<Button
				variant="ghost"
				class="h-14 rounded-full border border-neutral-300 px-6 text-base font-medium text-neutral-800 transition-all hover:scale-105 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
			>
				Browse collection
			</Button>
		</div>
	</div>

	<div class="flex justify-center lg:w-1/2">
		<img
			src="/landing.png"
			alt="Landing illustration"
			class="h-[450px] w-auto rounded-2xl object-cover"
		/>
	</div>
</section>
