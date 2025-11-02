<script lang="ts" module>
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { LoaderCircle } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import type { User } from '../../types/user';
</script>

<script lang="ts">
	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
	let fullName = $state('');
	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let loading = $state(false);
	async function handleSignUp(event: Event) {
		event.preventDefault();
		loading = true;
		try {
			const response = await fetch('/api/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ fullName, email, password, confirmPassword })
			});
			if (!response.ok) {
				console.log('Error creating user');
			}
			const resp: { success: boolean; data: User } = await response.json();
			console.log(resp);
			if (resp.success) {
				toast.success(`Welcome ${resp.data.name} to Alem Guzo`);
			}
			fullName = '';
			email = '';
			password = '';
			confirmPassword = '';
		} catch (error) {
			toast.error('Error creating user');
			console.log('Error at creating user', error);
		} finally {
			loading = false;
		}
	}
</script>

<div class={cn('flex flex-col gap-6', className)} {...restProps}>
	<form onsubmit={handleSignUp}>
		<Field.Group>
			<div class="flex flex-col items-center gap-2 text-center">
				<a href="/" class="flex flex-col items-center gap-2 font-medium">
					<div class="flex size-8 items-center justify-center rounded-md">
						<GalleryVerticalEndIcon class="size-6" />
					</div>
					<span class="sr-only">Alem Guzo.</span>
				</a>
				<h1 class="text-xl font-bold">Welcome to Alem Guzo.</h1>
				<Field.Description>
					Already have an account? <a class="px-1" href="/login">Sign in</a>
				</Field.Description>
			</div>
			<div class="flex-col items-center justify-between space-y-2">
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
					<Field.Field>
						<Field.Label for="email">Full name</Field.Label>
						<Input
							id="full-name"
							bind:value={fullName}
							type="text"
							placeholder="John Doe"
							required
						/>
					</Field.Field>
					<Field.Field>
						<Field.Label for="email">Email</Field.Label>
						<Input
							id="email"
							type="email"
							bind:value={email}
							placeholder="m@example.com"
							required
						/>
					</Field.Field>
				</div>
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
					<Field.Field>
						<Field.Label for="password">Password</Field.Label>
						<Input
							id="password"
							type="password"
							bind:value={password}
							placeholder="Enter your password here"
							required
						/>
					</Field.Field>
					<Field.Field>
						<Field.Label for="confirm-password">Confirm password</Field.Label>
						<Input
							id="confirm-password"
							type="password"
							placeholder="Enter your password again"
							bind:value={confirmPassword}
							required
						/>
					</Field.Field>
				</div>
			</div>
			<Field.Field>
				<Button type="submit" disabled={loading}>
					{#if loading}
						<p class="flex items-center gap-2">
							Signing...
							<LoaderCircle class="animate-spin" />
						</p>
					{:else}
						<span>Create Account</span>
					{/if}
				</Button>
			</Field.Field>

			<Field.Separator>Or</Field.Separator>
			<Field.Field class="grid gap-4 ">
				<Button variant="outline" type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
							fill="currentColor"
						/>
					</svg>
					Continue with Google
				</Button>
			</Field.Field>
		</Field.Group>
	</form>
	<Field.Description class="px-6 text-center">
		By clicking continue, you agree to our <a href="/terms">Terms of Service</a>
		and <a href="/privacy">Privacy Policy</a>.
	</Field.Description>
</div>
