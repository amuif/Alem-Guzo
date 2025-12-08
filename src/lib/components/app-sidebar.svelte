<script lang="ts" module>
	const data = {
		navMain: [
			{
				title: 'Dashboard',
				icon: LayoutDashboard,
				url: '/dashboard'
			},
			{
				title: 'Library',
				icon: BookOpen,
				url: '/library'
			},
			{
				title: 'Collection',
				icon: BookCopy,
				url: '/collection'
			},
			{
				title: 'Reviews',
				icon: Star,
				url: '/reviews'
			}
		]
	};
</script>

<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { BookCopy, BookOpen, LayoutDashboard, Star } from '@lucide/svelte';
	import type { ComponentProps } from 'svelte';
	import NavUser from './nav-user.svelte';
	import { page } from '$app/state';
	import type { User } from '../../types/user';
	let {
		ref = $bindable(null),
		user,
		...restProps
	}: ComponentProps<typeof Sidebar.Root> & { user: User } = $props();
</script>

<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.Header class="text-center text-xl font-extrabold">Alem Guzo</Sidebar.Header>
			<Sidebar.GroupContent class="py-3">
				<Sidebar.Menu class="mx-auto flex-col space-y-1 text-xl font-bold">
					{#each data.navMain as nav (nav.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								class={`${page.url.pathname === nav.url ? '!bg-primary !text-black' : ''}`}
								size="lg"
							>
								{#snippet child({ props })}
									<a href={nav.url} {...props}>
										<nav.icon /> <span>{nav.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer><NavUser {user} /></Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
