<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import { site } from '$lib/data/site';

	const portrait =
		'https://images.unsplash.com/photo-1674607676648-2d07fd9ac0e3?auto=format&fit=crop&w=1600&q=80';
</script>

<section class="atmosphere relative overflow-hidden pt-28 pb-16 text-white md:pt-32 md:pb-20">
	<div class="grain absolute inset-0" aria-hidden="true"></div>
	<div class="site-wrap relative">
		<p class="font-display text-sm tracking-[0.14em] text-amber uppercase">About</p>
		<h1 class="mt-3 text-h1">Experience you can trust</h1>
		<p class="mt-4 max-w-prose text-mist">
			{site.yearsExperience}+ years in the electrical industry — and a straightforward commitment to
			quality work.
		</p>
	</div>
</section>

<section class="section-pad bg-paper">
	<div class="site-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
		<Reveal>
			<div class="relative overflow-hidden rounded-[var(--radius-sm)]">
				<img
					src={portrait}
					alt="Electrician working on overhead power lines from a utility lift"
					class="aspect-[4/5] w-full object-cover object-top"
					width="800"
					height="1000"
					loading="lazy"
				/>
			</div>
		</Reveal>
		<Reveal>
			<h2 class="text-h2 text-ink">Built on craft, not shortcuts</h2>
			<p class="mt-5 text-steel">
				Maguire Electric is dedicated to giving you the personalized service and quality
				installation you deserve. With over {site.yearsExperience} years of experience and a vast
				knowledge of electrical construction, you get the information you need to make informed
				decisions about your electrical system.
			</p>
			<p class="mt-4 text-steel">
				Our motto says it plainly: <span class="text-ink font-semibold">“{site.motto}.”</span>
			</p>
			<p class="mt-4 text-steel">
				Licensed and insured — so you can rest easy when you choose Maguire Electric for all your
				electrical needs.
			</p>
		</Reveal>
	</div>
</section>

<section class="atmosphere relative overflow-hidden section-pad text-white">
	<div class="grain absolute inset-0" aria-hidden="true"></div>
	<div class="site-wrap relative max-w-3xl">
		<Reveal>
			<blockquote class="font-display text-h2 normal-case tracking-normal leading-snug">
				“The quality is remembered long after the price is forgotten.”
			</blockquote>
			<p class="mt-6 text-mist">— {site.legalName}</p>
			<div class="mt-10 flex flex-wrap gap-3">
				<a href={site.phoneHref} class="btn btn-primary">Call {site.phone}</a>
				<a href="/contact" class="btn btn-ghost">Request a quote</a>
			</div>
		</Reveal>
	</div>
</section>
