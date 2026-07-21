import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..');
const outPath = join(outDir, 'maguire-electric-site.pdf');
const base = process.env.SITE_URL || 'http://127.0.0.1:5173';

const routes = [
	{ path: '/', label: 'Home' },
	{ path: '/services', label: 'Services' },
	{ path: '/about', label: 'About' },
	{ path: '/contact', label: 'Contact' }
];

const browser = await chromium.launch();
const context = await browser.newContext({
	viewport: { width: 1280, height: 900 }
});

const pdfBuffers = [];

for (const route of routes) {
	const page = await context.newPage();
	await page.goto(`${base}${route.path}`, { waitUntil: 'networkidle', timeout: 60000 });
	// Let hero/fonts settle
	await page.waitForTimeout(800);
	await page.evaluate(async () => {
		const imgs = [...document.images];
		await Promise.all(
			imgs.map((img) =>
				img.complete
					? Promise.resolve()
					: new Promise((resolve) => {
							img.addEventListener('load', resolve);
							img.addEventListener('error', resolve);
						})
			)
		);
		// Reveal scroll sections for print
		document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
	});

	const pdf = await page.pdf({
		format: 'Letter',
		printBackground: true,
		preferCSSPageSize: false,
		margin: { top: '0.35in', bottom: '0.35in', left: '0.35in', right: '0.35in' }
	});
	pdfBuffers.push({ label: route.label, pdf });
	console.log(`Captured ${route.label}`);
	await page.close();
}

await browser.close();

const merged = await PDFDocument.create();
for (const { label, pdf } of pdfBuffers) {
	const doc = await PDFDocument.load(pdf);
	const pages = await merged.copyPages(doc, doc.getPageIndices());
	pages.forEach((p) => merged.addPage(p));
	console.log(`Merged ${label} (${pages.length} page(s))`);
}

writeFileSync(outPath, await merged.save());
console.log(`Wrote ${outPath}`);
