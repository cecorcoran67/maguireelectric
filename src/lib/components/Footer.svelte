<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<footer class="atmosphere relative overflow-hidden text-mist">
	<div class="grain absolute inset-0" aria-hidden="true"></div>
	<div class="site-wrap relative section-pad grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
		<div>
			<p class="font-display text-2xl tracking-[0.08em] text-white uppercase">
				{site.name}
			</p>
			<p class="mt-3 max-w-sm text-sm leading-relaxed text-mist/90">
				{site.motto}.
			</p>
		</div>

		<div>
			<p class="font-display text-sm tracking-[0.12em] text-amber uppercase">Navigate</p>
			<ul class="mt-4 space-y-2 text-sm">
				{#each site.nav as item}
					<li>
						<a href={item.href} class="hover:text-white transition-colors">{item.label}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<p class="font-display text-sm tracking-[0.12em] text-amber uppercase">Contact</p>
			<ul class="mt-4 space-y-2 text-sm">
				<li>
					<a href={site.phoneHref} class="hover:text-white transition-colors">{site.phone}</a>
				</li>
				<li>
					<a href={site.emailHref} class="hover:text-white transition-colors">{site.email}</a>
				</li>
				<li class="text-mist/80">
					{site.address.line1}<br />
					{site.address.line2}
				</li>
			</ul>
		</div>
	</div>

	<div class="relative border-t border-white/10">
		<div class="site-wrap flex flex-col gap-2 py-5 text-xs text-steel sm:flex-row sm:justify-between">
			<p>&copy; {new Date().getFullYear()} {site.legalName} All rights reserved.</p>
			<p>Licensed &amp; insured · Woodstock, GA</p>
		</div>
	</div>
</footer>
