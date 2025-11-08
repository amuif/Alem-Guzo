<script>
	import { authClient } from '$lib/auth-client';
	const session = authClient.useSession();
	console.log(session);
</script>

{#if $session.data}
	<p>{$session.data.user.name}</p>
{/if}
