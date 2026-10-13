<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { site } from '$lib/data/site';

	let open = $state(false);

	const path = $derived(page.url.pathname.slice(base.length) || '/');

	function isActive(href: string) {
		if (href === '/') return path === '/';
		return path.startsWith(href);
	}

	function close() {
		open = false;
	}
</script>

<header
	class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md"
>
	<div class="site-wrap flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
		<a
			href="{base}/"
			class="font-display text-lg tracking-[0.08em] text-white uppercase md:text-xl"
			onclick={close}
		>
			{site.name}
		</a>

		<nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
			{#each site.nav as item}
				<a
					href="{base}{item.href}"
					class="text-sm font-semibold tracking-wide uppercase transition-colors duration-(--duration-fast)"
					class:text-amber={isActive(item.href)}
					class:text-mist={!isActive(item.href)}
					class:hover:text-white={!isActive(item.href)}
				>
					{item.label}
				</a>
			{/each}
			<a href={site.phoneHref} class="btn btn-primary py-2.5 text-xs">
				Call {site.phone}
			</a>
		</nav>

		<button
			type="button"
			class="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white md:hidden"
			aria-expanded={open}
			aria-controls="mobile-nav"
			onclick={() => (open = !open)}
		>
			<span class="sr-only">Menu</span>
			{#if open}
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" />
				</svg>
			{:else}
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" />
				</svg>
			{/if}
		</button>
	</div>

	{#if open}
		<div id="mobile-nav" class="border-t border-white/10 bg-slate md:hidden">
			<nav class="site-wrap flex flex-col gap-1 py-4" aria-label="Mobile">
				{#each site.nav as item}
					<a
						href="{base}{item.href}"
						class="rounded-md px-3 py-3 text-sm font-semibold tracking-wide uppercase"
						class:text-amber={isActive(item.href)}
						class:text-mist={!isActive(item.href)}
						onclick={close}
					>
						{item.label}
					</a>
				{/each}
				<a href={site.phoneHref} class="btn btn-primary mt-2" onclick={close}>
					Call {site.phone}
				</a>
			</nav>
		</div>
	{/if}
</header>
