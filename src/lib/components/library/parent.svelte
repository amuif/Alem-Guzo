<script lang="ts">
	import PopularBooks from '../shared/popular-books.svelte';
	import Header from './header.svelte';
</script>

<section class="w-full p-2">
	<Header />
	<PopularBooks amount="100" />
</section>
