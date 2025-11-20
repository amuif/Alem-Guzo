<script>
	import { Button } from '../ui/button';
</script>

<section id="contact" class="px-4 py-20 lg:px-8">
	<div
		class="relative overflow-hidden rounded-3xl bg-neutral-900 text-white shadow-xl dark:bg-neutral-100 dark:text-black"
	>
		<div
			class="absolute inset-0 rounded-3xl border border-neutral-800/40 dark:border-neutral-300/40"
		></div>

		<div class="relative z-10 flex flex-col items-center space-y-6 px-6 py-16 text-center lg:py-24">
			<h3 class="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
				Discover, Save, and Access Your Books Anytime
			</h3>

			<p class="max-w-2xl text-sm text-neutral-400 dark:text-neutral-600">
				Build your personal digital library. Organize your favorite titles, keep your collection
				safe, and access your books from any device—whenever you need them.
			</p>

			<Button
				class="mt-6 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-200 dark:bg-black dark:text-white dark:hover:bg-neutral-800"
			>
				<a href="/login">Sign Up</a>
			</Button>
		</div>
	</div>
</section>
