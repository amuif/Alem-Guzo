<script lang="ts" module>
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { LoaderCircle } from '@lucide/svelte';
	import { Checkbox } from '../ui/checkbox';
	import { authClient } from '$lib/auth-client';
	import { toast } from 'svelte-sonner';
</script>

<script lang="ts">
	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
	let fullName = $state('');
	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let loading = $state(false);
	let showPassword = $state(false);
	let error = $state('');

	async function handleSubmit() {
		loading = true;
		try {
			const { data, error } = await authClient.signUp.email({
				name: fullName,
				email: email,
				password: password
			});
			if (data?.user) {
				toast.success(`Hello, ${data.user.name} to Alem Guzo`);
			}
			if (error) {
				toast.error(`Error, ${error.message}`);
			}
		} catch (error) {
			console.log('Error at Signing up user,', error);
		} finally {
			loading = false;
		}
	}
	async function handleGoogleSignup() {
		loading = true;
		try {
			const { data, error } = await authClient.signIn.social({ provider: 'google' });

			if (data) {
				toast.success(`Hello, to Alem Guzo`);
			}
			if (error) {
				toast.error(`Error, ${error.message}`);
			}
		} catch (error) {
			console.log('Errror occured when signing up with google, ', error);
		} finally {
			loading = false;
		}
	}
</script>

<div class={cn('flex flex-col gap-6', className)} {...restProps}>
	<form onsubmit={handleSubmit}>
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
							class={`${error ? 'border-destructive' : ''}`}
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
							class={`${error ? 'border-destructive' : ''}`}
						/>
					</Field.Field>
				</div>
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
					<Field.Field>
						<Field.Label for="password">Password</Field.Label>
						<Input
							id="password"
							type={showPassword ? 'text' : 'password'}
							bind:value={password}
							placeholder="Enter your password here"
							required
							class={`${error ? 'border-destructive' : ''}`}
						/>
					</Field.Field>
					<Field.Field>
						<Field.Label for="confirm-password">Confirm password</Field.Label>
						<Input
							id="confirm-password"
							type={showPassword ? 'text' : 'password'}
							placeholder="Enter your password again"
							bind:value={confirmPassword}
							required
							class={`${error ? 'border-destructive' : ''}`}
						/>
					</Field.Field>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<Checkbox bind:checked={showPassword} />
				<span>Show password</span>
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
				<Button variant="outline" type="button" onclick={handleGoogleSignup}>
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
