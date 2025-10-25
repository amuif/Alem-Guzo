<script>
	import { Button } from '$lib/components/ui/button';
	import { fade } from 'svelte/transition';
</script>

<section class="mx-auto max-w-4xl px-6 py-20 text-center" in:fade>
	<h1 class="mb-6 text-3xl font-semibold text-foreground">Terms of Service</h1>
	<p class="mb-10 leading-relaxed text-muted-foreground">
		Welcome to Alem Guzo. By using this service, you agree to the following terms and conditions.
	</p>

	<div class="space-y-8 text-left text-muted-foreground">
		<section>
			<h2 class="mb-2 text-lg font-medium text-foreground">1. Service Usage</h2>
			<p>
				Alem Guzo is free to use and designed to provide users with a smooth and secure experience.
				You can access and use our services without any subscription or payment.
			</p>
		</section>

		<section>
			<h2 class="mb-2 text-lg font-medium text-foreground">2. User Responsibility</h2>
			<p>
				You are responsible for your activity while using the service. Please use it ethically and
				in a way that does not harm others or the platform.
			</p>
		</section>

		<section>
			<h2 class="mb-2 text-lg font-medium text-foreground">3. Privacy & Data</h2>
			<p>
				We do not collect sensitive personal data. Any usage data may be used to improve the service
				experience. You can review our
				<a href="/privacy" class="text-foreground underline transition hover:text-primary"
					>Privacy Policy</a
				>
				for more details.
			</p>
		</section>

		<section>
			<h2 class="mb-2 text-lg font-medium text-foreground">4. No Liability</h2>
			<p>
				Alem Guzo is provided “as-is.” While we aim to offer a reliable service, we make no
				guarantees about uptime, accuracy, or data availability. Users take full responsibility for
				any risks when using the platform.
			</p>
		</section>

		<section>
			<h2 class="mb-2 text-lg font-medium text-foreground">5. Updates to Terms</h2>
			<p>
				These terms may be updated from time to time. Continued use of Alem Guzo after updates means
				you accept the revised terms.
			</p>
		</section>

		<p class="mt-10 text-sm text-muted-foreground">Last updated: October 2025</p>
		<div class="mt-8 flex justify-center">
			<Button
				class="rounded-full bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
				onclick={() => window.history.back()}
			>
				Go Back
			</Button>
		</div>
	</div>
</section>
