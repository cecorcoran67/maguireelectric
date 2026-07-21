<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { site } from '$lib/data/site';

	let { form } = $props();
</script>

<section class="atmosphere relative overflow-hidden pt-28 pb-16 text-white md:pt-32 md:pb-20">
	<div class="grain absolute inset-0" aria-hidden="true"></div>
	<div class="site-wrap relative">
		<p class="font-display text-sm tracking-[0.14em] text-amber uppercase">Contact</p>
		<h1 class="mt-3 text-h1">Request a quote</h1>
		<p class="mt-4 max-w-prose text-mist">
			Call directly or send the form — we will help you plan the right electrical work for your home
			or business.
		</p>
	</div>
</section>

<section class="section-pad bg-paper">
	<div class="site-wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
		<Reveal>
			<h2 class="text-h2 text-ink">Get in touch</h2>
			<p class="mt-4 text-steel">Prefer to talk it through? Call or email anytime.</p>

			<ul class="mt-8 space-y-6">
				<li>
					<p class="font-display text-sm tracking-[0.12em] text-ember uppercase">Phone</p>
					<a href={site.phoneHref} class="mt-1 block text-lg font-semibold text-ink hover:text-ember">
						{site.phone}
					</a>
				</li>
				<li>
					<p class="font-display text-sm tracking-[0.12em] text-ember uppercase">Email</p>
					<a href={site.emailHref} class="mt-1 block text-lg font-semibold text-ink hover:text-ember">
						{site.email}
					</a>
				</li>
				<li>
					<p class="font-display text-sm tracking-[0.12em] text-ember uppercase">Address</p>
					<p class="mt-1 text-ink">
						{site.address.line1}<br />
						{site.address.line2}<br />
						{site.address.country}
					</p>
				</li>
			</ul>

			<a href={site.phoneHref} class="btn btn-primary mt-10">Call {site.phone}</a>
		</Reveal>

		<Reveal>
			<ContactForm {form} />
		</Reveal>
	</div>
</section>
