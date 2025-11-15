<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { page } from '$app/state';
	import ModeToggle from '$lib/components/mode-toggle.svelte';
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<Sidebar.Trigger class="-ml-1" />
			<Separator orientation="vertical" class="mr-2 h-4" />
			<Breadcrumb.Root class="flex w-full items-center justify-between ">
				<Breadcrumb.List>
					<span class="font-bold capitalize">
						{page.url.pathname.slice(1)}
					</span>
				</Breadcrumb.List>
				<Breadcrumb.List><ModeToggle /></Breadcrumb.List>
			</Breadcrumb.Root>
		</header>
<slot/>
	</Sidebar.Inset>
</Sidebar.Provider>
