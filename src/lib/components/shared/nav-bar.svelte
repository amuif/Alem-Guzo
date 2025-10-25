<script lang="ts">
	import { User, Menu, X } from '@lucide/svelte';
	import Button from '../ui/button/button.svelte';
	import ModeToggle from '../mode-toggle.svelte';

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '#about' },
		{ name: 'Categories', href: '#catagories' },
		{ name: 'Testimony', href: '#testimony' },
		{ name: 'Contact', href: '#contact' }
	];

	let active = $state('/');
	let menuOpen = $state(false);
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<div class="flex w-full items-center justify-between lg:w-auto">
			<p class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Alem Guzo</p>
			<div class="flex space-x-3 lg:hidden">
				<ModeToggle />
				<Button
					variant="ghost"
					class="block text-neutral-900 lg:hidden dark:text-white"
					onclick={() => (menuOpen = !menuOpen)}
				>
					{#if menuOpen}
						<X class="h-7 w-7" />
					{:else}
						<Menu class="h-7 w-7" />
					{/if}
				</Button>
			</div>
		</div>

		<nav
			class="fixed top-[72px] left-0 z-40 w-full flex-col items-center gap-6 py-6 transition-all duration-300
		{menuOpen ? 'flex bg-white/95 backdrop-blur-md dark:bg-neutral-900/95' : 'hidden'}
		lg:backdrop-blur-0 lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:py-0"
		>
			{#each links as link (link.name)}
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					href={link.href}
					class="relative text-lg font-medium text-neutral-700 transition-all duration-200 hover:text-black dark:text-neutral-300 dark:hover:text-white
					{active === link.href
						? 'font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-black dark:after:bg-white'
						: ''}"
					onclick={() => {
						active = link.href;
						menuOpen = false;
					}}
				>
					{link.name}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-2 lg:flex">
			<ModeToggle />
			<Button variant="ghost" size="lg" class="text-base">
				<a href="/login" class="flex items-center gap-1">
					<User class="h-5 w-5" />
					Login</a
				>
			</Button>
		</div>
	</div>

	{#if menuOpen}
		<div
			class="mt-3 flex items-center justify-center gap-4 border-t border-neutral-200 pt-4 lg:hidden dark:border-neutral-700"
		>
			<ModeToggle />

			<Button variant="ghost" size="lg" class="text-base">
				<a href="/login" class="flex items-center gap-1">
					<User class="h-5 w-5" />
					Login</a
				>
			</Button>
		</div>
	{/if}
</header>
