<script lang="ts" module>
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
	import type { HTMLAttributes } from 'svelte/elements';
	import {
		FieldGroup,
		Field,
		FieldLabel,
		FieldDescription,
		FieldSeparator
	} from '$lib/components/ui/field/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import { LoaderCircle } from '@lucide/svelte';
	import type { User } from '../../types/user';
	import { toast } from 'svelte-sonner';
</script>

<script>
	const id = $props.id();
	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

	let email = $state('');
	let password = $state('');
	let loading = $state(false);

	async function handleSignin(event: Event) {
		event.preventDefault();
		loading = true;
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});
			if (!response.ok) {
				console.log('Error creating user');
			}
			const resp: { success: boolean; data: User } = await response.json();
			console.log(resp);
			if (resp.success) {
				toast.success(`Welcome ${resp.data.name} to Alem Guzo`);
			}
			email = '';
			password = '';
		} catch (error) {
			toast.error('Error creating user');
			console.log('Error at creating user', error);
		} finally {
			loading = false;
		}
	}
</script>

<div class={cn('flex flex-col gap-6', className)} bind:this={ref} {...restProps}>
	<form onsubmit={handleSignin}>
		<FieldGroup>
			<div class="flex flex-col items-center gap-2 text-center">
				<a href="##" class="flex flex-col items-center gap-2 font-medium">
					<div class="flex size-8 items-center justify-center rounded-md">
						<GalleryVerticalEndIcon class="size-6" />
					</div>
					<span class="sr-only">Acme Inc.</span>
				</a>
				<h1 class="text-xl font-bold">Welcome to Alem Guzo</h1>
				<FieldDescription>
					Don't have an account? <a href="/signup" class="px-1">Sign up</a>
				</FieldDescription>
			</div>
			<Field>
				<FieldLabel for="email-{id}">Email</FieldLabel>
				<Input
					id="email-{id}"
					type="email"
					placeholder="m@example.com"
					bind:value={email}
					required
				/>
			</Field>
			<Field>
				<FieldLabel for="password-{id}">Password</FieldLabel>
				<Input
					id="password-{id}"
					type="password"
					placeholder="Enter your password here"
					bind:value={password}
					required
				/>
			</Field>
			<Field>
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
			</Field>

			<FieldSeparator>Or</FieldSeparator>
			<Field class="grid gap-4 ">
				<Button variant="outline" type="button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
							fill="currentColor"
						/>
					</svg>
					Continue with Google
				</Button>
			</Field>
		</FieldGroup>
	</form>
	<FieldDescription class="px-6 text-center">
		By clicking continue, you agree to our <a href="/terms">Terms of Service</a> and
		<a href="/privacy">Privacy Policy</a>.
	</FieldDescription>
</div>
