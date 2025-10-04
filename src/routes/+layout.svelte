<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
  import NavBar from '$lib/components/shared/nav-bar.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<NavBar/>
{@render children?.()}
