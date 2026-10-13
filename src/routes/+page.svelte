<script lang="ts">
	import { base } from '$app/paths';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site, serviceTeasers } from '$lib/data/site';

	const heroImage =
		'https://images.unsplash.com/photo-1595831708961-1b13c0dd2422?auto=format&fit=crop&w=2400&q=80';
</script>

<section class="relative min-h-[100svh] overflow-hidden text-white">
	<div class="absolute inset-0">
		<img
			src={heroImage}
			alt=""
			class="h-full w-full object-cover object-[70%_center]"
			width="2400"
			height="1600"
			fetchpriority="high"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-r from-ink/95 via-navy/85 to-navy/55"
			aria-hidden="true"
		></div>
		<div class="grain absolute inset-0" aria-hidden="true"></div>
	</div>

	<div class="site-wrap relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
		<p class="hero-rise font-display text-brand text-white uppercase">{site.name}</p>
		<h1 class="hero-rise hero-rise-delay mt-4 max-w-2xl text-h2 font-display text-white normal-case tracking-normal">
			Quality installation you can count on — long after the invoice is gone.
		</h1>
		<p class="hero-rise hero-rise-delay-2 mt-5 max-w-xl text-mist">
			{site.tagline}
		</p>
		<div class="hero-rise hero-rise-delay-2 mt-8 flex flex-wrap gap-3">
			<a href={site.phoneHref} class="btn btn-primary">Call {site.phone}</a>
			<a href="{base}/contact" class="btn btn-ghost">Request a quote</a>
		</div>
	</div>
</section>

<section class="section-pad bg-fog">
	<div class="site-wrap">
		<Reveal>
			<p class="font-display text-sm tracking-[0.14em] text-ember uppercase">Why Maguire</p>
			<h2 class="mt-3 max-w-xl text-h2 text-ink">Personalized service. Work that holds up.</h2>
			<p class="mt-4 max-w-prose text-steel">
				Dedicated commercial and residential electrical work — clear information, careful
				installation, and the peace of mind that comes with licensed and insured service.
			</p>
		</Reveal>
	</div>
</section>

<section class="section-pad bg-paper">
	<div class="site-wrap">
		<Reveal>
			<p class="font-display text-sm tracking-[0.14em] text-ember uppercase">Services</p>
			<h2 class="mt-3 text-h2 text-ink">Built for homes and businesses</h2>
			<p class="mt-4 max-w-prose text-steel">
				From new construction wiring to safety upgrades — practical electrical work done with care.
			</p>
		</Reveal>

		<ul class="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
			{#each serviceTeasers as item, i}
				<li>
					<Reveal class="border-t border-ink/15 pt-5">
						<span class="font-display text-sm text-amber">{String(i + 1).padStart(2, '0')}</span>
						<h3 class="mt-3 font-display text-h3 text-ink">{item.title}</h3>
						<p class="mt-2 text-sm text-steel">{item.blurb}</p>
					</Reveal>
				</li>
			{/each}
		</ul>

		<Reveal class="mt-12">
			<a href="{base}/services" class="btn btn-outline">View all services</a>
		</Reveal>
	</div>
</section>

<section class="atmosphere relative overflow-hidden section-pad text-white">
	<div class="grain absolute inset-0" aria-hidden="true"></div>
	<div class="site-wrap relative grid gap-10 md:grid-cols-3 md:gap-8">
		<Reveal>
			<p class="font-display text-4xl text-amber md:text-5xl">{site.yearsExperience}+</p>
			<p class="mt-2 text-sm tracking-wide text-mist uppercase">Years in the trade</p>
		</Reveal>
		<Reveal>
			<p class="font-display text-4xl text-amber md:text-5xl">Licensed</p>
			<p class="mt-2 text-sm tracking-wide text-mist uppercase">&amp; fully insured</p>
		</Reveal>
		<Reveal>
			<p class="font-display text-4xl text-amber md:text-5xl">Local</p>
			<p class="mt-2 text-sm tracking-wide text-mist uppercase">Woodstock, Georgia</p>
		</Reveal>
	</div>
</section>

<section class="section-pad bg-fog">
	<div class="site-wrap max-w-3xl">
		<Reveal>
			<p class="font-display text-sm tracking-[0.14em] text-ember uppercase">Ready when you are</p>
			<h2 class="mt-3 text-h2 text-ink">Talk through your project</h2>
			<p class="mt-4 text-steel">
				Call for a direct conversation, or send a short note and we will follow up with next steps.
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<a href={site.phoneHref} class="btn btn-primary">Call {site.phone}</a>
				<a href="{base}/contact" class="btn btn-outline">Request a quote</a>
			</div>
		</Reveal>
	</div>
</section>
