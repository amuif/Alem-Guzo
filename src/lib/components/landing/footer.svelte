<script>
	import { Facebook, Twitter, Instagram, Github, Mail } from '@lucide/svelte';
	import { Button } from '../ui/button';
</script>

<footer
	class="w-full border-t border-neutral-200 bg-neutral-50 px-6 py-16 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200"
>
	<div
		class="mx-auto flex max-w-6xl flex-col space-y-12 lg:flex-row lg:items-start lg:justify-between lg:space-y-0"
	>
		<div class="flex flex-col space-y-4">
			<h3 class="text-2xl font-semibold tracking-tight">OpenBook</h3>
			<p class="max-w-md text-sm text-neutral-500 dark:text-neutral-400">
				Discover, explore, and connect with timeless books from around the world. Your journey into
				stories that shaped generations starts here.
			</p>
			<Button
				class="mt-4 w-fit rounded-full border border-neutral-300 bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-neutral-800 dark:border-neutral-600 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
			>
				<a href="/login">Join us</a>
			</Button>
		</div>

		<!-- Center: Quick links -->
		<div class=" grid grid-cols-2 gap-10 text-sm sm:grid-cols-2">
			<div class="space-y-3">
				<h4 class="font-semibold text-neutral-700 dark:text-neutral-200">Company</h4>
				<ul class="space-y-2 text-neutral-500 dark:text-neutral-400">
					<li>
						<a href="#about" class="hover:text-neutral-800 dark:hover:text-neutral-100">About</a>
					</li>
					<li>
						<a href="/privacy" class="hover:text-neutral-800 dark:hover:text-neutral-100"
							>Privacy Policy</a
						>
					</li>
				</ul>
			</div>

			<div class="space-y-3">
				<h4 class="font-semibold text-neutral-700 dark:text-neutral-200">Connect</h4>
				<ul class="flex items-center space-x-4 text-neutral-500 dark:text-neutral-400">
					<li>
						<a
							href="#"
							aria-label="Facebook"
							class="transition hover:text-neutral-900 dark:hover:text-neutral-100"
						>
							<Facebook class="h-5 w-5" />
						</a>
					</li>
					<li>
						<a
							href="#"
							aria-label="Twitter"
							class="transition hover:text-neutral-900 dark:hover:text-neutral-100"
						>
							<Twitter class="h-5 w-5" />
						</a>
					</li>
					<li>
						<a
							href="#"
							aria-label="Instagram"
							class="transition hover:text-neutral-900 dark:hover:text-neutral-100"
						>
							<Instagram class="h-5 w-5" />
						</a>
					</li>
					<li>
						<a
							href="#"
							aria-label="GitHub"
							class="transition hover:text-neutral-900 dark:hover:text-neutral-100"
						>
							<Github class="h-5 w-5" />
						</a>
					</li>
					<li>
						<a
							href="mailto:hello@openbook.com"
							aria-label="Email"
							class="transition hover:text-neutral-900 dark:hover:text-neutral-100"
						>
							<Mail class="h-5 w-5" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div
		class="mx-auto mt-12 max-w-6xl border-t border-neutral-200 pt-6 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"
	>
		<p>© {new Date().getFullYear()} OpenBook. All rights reserved.</p>
	</div>
</footer>
