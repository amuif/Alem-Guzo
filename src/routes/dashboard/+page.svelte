<script>
	import { authClient } from '$lib/auth-client';
	const session = authClient.useSession();
	console.log(session);
</script>

<section class="m-auto text-center">home page</section>
