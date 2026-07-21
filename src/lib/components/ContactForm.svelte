<script lang="ts">
	import { enhance } from '$app/forms';
	import { serviceInterestOptions } from '$lib/data/site';

	type FormValues = {
		name?: string;
		phone?: string;
		email?: string;
		service?: string;
		message?: string;
	};

	type FormState =
		| { success: true; devFallback?: boolean }
		| { error: string; values?: FormValues }
		| null
		| undefined;

	let { form }: { form: FormState } = $props();

	let submitting = $state(false);
</script>

{#if form && 'success' in form && form.success}
	<div
		class="rounded-[var(--radius-lg)] border border-amber/40 bg-fog p-8 text-ink"
		role="status"
	>
		<h2 class="font-display text-h3">Message sent</h2>
		<p class="mt-3 text-steel">
			Thanks — we received your request and will follow up soon. For faster help, call anytime.
		</p>
	</div>
{:else}
	<form
		method="POST"
		class="rounded-[var(--radius-lg)] border border-ink/10 bg-fog p-6 shadow-sm md:p-8"
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => {
				await update();
				submitting = false;
			};
		}}
	>
		{#if form && 'error' in form && form.error}
			<p
				class="mb-5 rounded-[var(--radius-md)] border border-ember/30 bg-white px-4 py-3 text-sm text-ember"
				role="alert"
			>
				{form.error}
			</p>
		{/if}

		<div class="grid gap-5 sm:grid-cols-2">
			<label class="block sm:col-span-1">
				<span class="mb-1.5 block text-sm font-semibold text-ink">Name</span>
				<input
					type="text"
					name="name"
					required
					autocomplete="name"
					value={form && 'values' in form ? (form.values?.name ?? '') : ''}
					class="w-full rounded-[var(--radius-md)] border-ink/15 bg-white text-ink focus:border-amber focus:ring-amber"
				/>
			</label>

			<label class="block sm:col-span-1">
				<span class="mb-1.5 block text-sm font-semibold text-ink">Phone</span>
				<input
					type="tel"
					name="phone"
					required
					autocomplete="tel"
					value={form && 'values' in form ? (form.values?.phone ?? '') : ''}
					class="w-full rounded-[var(--radius-md)] border-ink/15 bg-white text-ink focus:border-amber focus:ring-amber"
				/>
			</label>

			<label class="block sm:col-span-1">
				<span class="mb-1.5 block text-sm font-semibold text-ink">Email</span>
				<input
					type="email"
					name="email"
					required
					autocomplete="email"
					value={form && 'values' in form ? (form.values?.email ?? '') : ''}
					class="w-full rounded-[var(--radius-md)] border-ink/15 bg-white text-ink focus:border-amber focus:ring-amber"
				/>
			</label>

			<label class="block sm:col-span-1">
				<span class="mb-1.5 block text-sm font-semibold text-ink">Service interest</span>
				<select
					name="service"
					required
					value={form && 'values' in form ? (form.values?.service ?? '') : ''}
					class="w-full rounded-[var(--radius-md)] border-ink/15 bg-white text-ink focus:border-amber focus:ring-amber"
				>
					<option value="" disabled>Select one</option>
					{#each serviceInterestOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</label>

			<label class="block sm:col-span-2">
				<span class="mb-1.5 block text-sm font-semibold text-ink">Message</span>
				<textarea
					name="message"
					required
					rows="5"
					value={form && 'values' in form ? (form.values?.message ?? '') : ''}
					class="w-full rounded-[var(--radius-md)] border-ink/15 bg-white text-ink focus:border-amber focus:ring-amber"
				></textarea>
			</label>
		</div>

		<button type="submit" class="btn btn-primary mt-6 w-full sm:w-auto" disabled={submitting}>
			{submitting ? 'Sending…' : 'Send quote request'}
		</button>
	</form>
{/if}
