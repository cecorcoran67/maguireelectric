import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import { site } from '$lib/data/site';
import type { Actions, PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = () => ({
	title: 'Contact',
	description:
		'Request a quote or call Maguire Electric in Woodstock, GA — 678-575-7659 · mike@maguireelectric.com'
});

function str(data: FormData, key: string) {
	const value = data.get(key);
	return typeof value === 'string' ? value.trim() : '';
}

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const values = {
			name: str(data, 'name'),
			phone: str(data, 'phone'),
			email: str(data, 'email'),
			service: str(data, 'service'),
			message: str(data, 'message')
		};

		if (!values.name || !values.phone || !values.email || !values.service || !values.message) {
			return fail(400, {
				error: 'Please fill in all fields.',
				values
			});
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
			return fail(400, {
				error: 'Please enter a valid email address.',
				values
			});
		}

		const to = env.CONTACT_TO || site.email;
		const apiKey = env.RESEND_API_KEY;

		const subject = `Quote request from ${values.name} — ${site.name}`;
		const text = [
			`Name: ${values.name}`,
			`Phone: ${values.phone}`,
			`Email: ${values.email}`,
			`Service: ${values.service}`,
			'',
			values.message
		].join('\n');

		if (!apiKey) {
			console.info('[contact] RESEND_API_KEY not set — logging quote request:', {
				to,
				...values
			});
			return {
				success: true as const,
				devFallback: true as const
			};
		}

		try {
			const resend = new Resend(apiKey);
			const from = env.CONTACT_FROM || 'Maguire Electric <onboarding@resend.dev>';
			const { error } = await resend.emails.send({
				from,
				to: [to],
				replyTo: values.email,
				subject,
				text
			});

			if (error) {
				console.error('[contact] Resend error:', error);
				return fail(500, {
					error: 'Could not send your message right now. Please call us instead.',
					values
				});
			}

			return { success: true as const };
		} catch (err) {
			console.error('[contact] Unexpected error:', err);
			return fail(500, {
				error: 'Could not send your message right now. Please call us instead.',
				values
			});
		}
	}
};
