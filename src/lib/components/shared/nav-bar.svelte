<script>
	import ModeToggle from '../mode-toggle.svelte';
	import { page } from '$app/state';
	import { User } from '@lucide/svelte';

	import Button from '../ui/button/button.svelte';
	let links = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '#about' },
		{ name: 'Services', href: '#services' },
		{ name: 'Contact', href: '#contact' }
	];
</script>

<div class="bg-primary">
<div class="sticky mx-auto pb-3 flex max-w-7xl items-center justify-between pt-7">
	<div><p class="text-3xl font-bold">Alem Guzo</p></div>
	<div class="hidden lg:flex">
		<nav class="flex gap-5">
			{#each links as link (link.name)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a
					href={link.href}
					class="text-xl {page.url.pathname === link.href
						? 'font-extrabold underline decoration-2 underline-offset-4'
						: ''}">{link.name}</a
				>
			{/each}
		</nav>
	</div>
	<div>
		<Button variant="ghost" size="lg" class='text-lg'><User class="h-10 w-10" size={30} /> Login</Button>
	</div>
</div>
</div>
