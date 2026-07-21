export const site = {
	name: 'Maguire Electric',
	legalName: 'Maguire Electric Inc.',
	motto: 'The quality is remembered long after the price is forgotten',
	tagline: 'Commercial & residential electrical — personalized service, lasting quality.',
	phone: '678-575-7659',
	phoneHref: 'tel:+16785757659',
	email: 'mike@maguireelectric.com',
	emailHref: 'mailto:mike@maguireelectric.com',
	address: {
		line1: '105 Stockwood Court',
		line2: 'Woodstock, GA 30188',
		country: 'USA'
	},
	yearsExperience: 40,
	nav: [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	]
} as const;

export const serviceGroups = [
	{
		id: 'new-construction',
		title: 'New construction & additions',
		description: 'Complete wiring for homes, additions, and finished basements — done right the first time.',
		items: ['Wiring for new homes', 'Home additions', 'Basement finishing']
	},
	{
		id: 'upgrades',
		title: 'Service & panel upgrades',
		description: 'Safer capacity for modern living — from service upgrades to full panel changes.',
		items: ['Service upgrades', 'Panel changes', 'In-home system evaluations']
	},
	{
		id: 'power-lighting',
		title: 'Power & lighting',
		description: 'Indoor and outdoor power and lighting that looks sharp and works hard.',
		items: ['Indoor power & lighting', 'Outdoor power & lighting', 'Spas and pools']
	},
	{
		id: 'safety',
		title: 'Safety upgrades',
		description: 'Code and safety improvements that protect your family and your property.',
		items: [
			'Code violation checks',
			'Smoke detectors',
			'Carbon monoxide monitors',
			'GFCI protection near sinks and bathtubs'
		]
	}
] as const;

export const serviceTeasers = [
	{
		title: 'New homes & additions',
		blurb: 'Full wiring for new builds, additions, and basements.'
	},
	{
		title: 'Panels & service upgrades',
		blurb: 'Modern capacity and safer electrical service.'
	},
	{
		title: 'Lighting, pools & outdoor',
		blurb: 'Indoor/outdoor power, lighting, spas, and pools.'
	},
	{
		title: 'Safety & code',
		blurb: 'Evaluations, GFCI, smoke, and CO protection.'
	}
] as const;

export const serviceInterestOptions = [
	'New home / addition wiring',
	'Service or panel upgrade',
	'Lighting or outdoor power',
	'Spa / pool',
	'Safety / code evaluation',
	'Other'
] as const;
