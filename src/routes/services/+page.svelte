<script lang="ts">
	import { base } from '$app/paths';
	import Reveal from '$lib/components/Reveal.svelte';
	import { site, serviceGroups } from '$lib/data/site';
</script>

<section class="atmosphere relative overflow-hidden pt-28 pb-16 text-white md:pt-32 md:pb-20">
	<div class="grain absolute inset-0" aria-hidden="true"></div>
	<div class="site-wrap relative">
		<p class="font-display text-sm tracking-[0.14em] text-amber uppercase">Services</p>
		<h1 class="mt-3 text-h1">Electrical work that lasts</h1>
		<p class="mt-4 max-w-prose text-mist">
			Commercial and residential — from new wiring to safety upgrades, with clear guidance every step.
		</p>
	</div>
</section>

<section class="section-pad bg-paper">
	<div class="site-wrap space-y-16 md:space-y-20">
		{#each serviceGroups as group}
			<article>
				<Reveal>
					<h2 class="text-h2 text-ink">{group.title}</h2>
					<p class="mt-3 max-w-prose text-steel">{group.description}</p>
					<ul class="mt-6 grid gap-3 sm:grid-cols-2">
						{#each group.items as item}
							<li class="border-l-2 border-amber pl-4 text-ink">{item}</li>
						{/each}
					</ul>
				</Reveal>
			</article>
		{/each}
	</div>
</section>

<section class="section-pad bg-fog">
	<div class="site-wrap">
		<Reveal>
			<h2 class="text-h2 text-ink">Need something specific?</h2>
			<p class="mt-4 max-w-prose text-steel">
				Describe the job and we will help you understand the options — so you can make an informed
				decision about your electrical system.
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<a href={site.phoneHref} class="btn btn-primary">Call {site.phone}</a>
				<a href="{base}/contact" class="btn btn-outline">Request a quote</a>
			</div>
		</Reveal>
	</div>
</section>
