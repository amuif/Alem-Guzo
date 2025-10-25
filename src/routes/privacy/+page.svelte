<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<section class="min-h-[80vh] px-6 py-16 lg:px-12">
	<div class="mx-auto max-w-4xl space-y-12 rounded-2xl p-8 text-neutral-900 dark:text-neutral-100">
		<h1 class="text-center text-3xl font-bold lg:text-5xl">Privacy Policy</h1>

		<div class="space-y-6">
			<p class="text-lg leading-relaxed">
				At Alem Guzo, we value your privacy and are committed to protecting your personal
				information. This Privacy Policy explains how we collect, use, and safeguard your data when
				you use our services.
			</p>

			<h2 class="text-2xl font-semibold">Information We Collect</h2>
			<ul class="ml-5 list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
				<li>Personal information you provide, such as name, email, and login credentials.</li>
				<li>Usage data, including pages visited, clicks, and interaction with our services.</li>
				<li>Cookies and tracking technologies to enhance user experience.</li>
			</ul>

			<h2 class="text-2xl font-semibold">How We Use Your Information</h2>
			<ul class="ml-5 list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
				<li>To provide and maintain our services effectively.</li>
				<li>To personalize your experience and recommend content.</li>
				<li>To communicate updates, promotions, or other relevant information.</li>
			</ul>

			<h2 class="text-2xl font-semibold">Data Security</h2>
			<p class="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
				We implement industry-standard security measures to protect your information. However,
				please be aware that no method of transmission over the Internet or electronic storage is
				100% secure.
			</p>

			<h2 class="text-2xl font-semibold">Third-Party Services</h2>
			<p class="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
				We may use third-party services to help operate our website, but we ensure these partners
				comply with privacy regulations and do not misuse your information.
			</p>

			<h2 class="text-2xl font-semibold">Your Rights</h2>
			<p class="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
				You have the right to access, update, or delete your personal information. For inquiries,
				please contact us at <a
					href="mailto:hello@alemguzo.com"
					class="text-neutral-900 underline dark:text-neutral-50">hello@alemguzo.com</a
				>.
			</p>

			<h2 class="text-2xl font-semibold">Changes to This Policy</h2>
			<p class="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
				We may update this Privacy Policy from time to time. Any changes will be posted on this page
				with an updated revision date.
			</p>

			<div class="mt-8 flex justify-center">
				<Button
					class="rounded-full bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					onclick={() => window.history.back()}
				>
					Go Back
				</Button>
			</div>
		</div>
	</div>
</section>
