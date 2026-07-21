<script lang="ts">
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { site } from '$lib/data/site';
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	let { children } = $props();

	const title = $derived(
		page.data.title ? `${page.data.title} · ${site.name}` : `${site.name} · Woodstock, GA Electrician`
	);
	const description = $derived(
		page.data.description ??
			'Licensed & insured commercial and residential electrician in Woodstock, GA. Personalized service and quality installation.'
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap"
		rel="stylesheet"
	/>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="theme-color" content="#121a24" />
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-amber focus:px-3 focus:py-2 focus:text-ink"
>
	Skip to content
</a>

<Header />
<main id="main">
	{@render children()}
</main>
<Footer />
