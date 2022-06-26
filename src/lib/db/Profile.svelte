<script>
	import { supabase } from '$lib/db/supabaseClient';
	import { user } from '$lib/db/sessionStore';
	import Avatar from '$lib/db/Avatar.svelte';

	let loading = true;
	let username = null;
	let website = null;
	let avatar_url = null;

	async function getProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();

			let { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user.id)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				username = data.username;
				website = data.website;
				avatar_url = data.avatar_url;
			}
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}

	async function updateProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates, {
				returning: 'minimal' // Don't return the value after inserting
			});

			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}
</script>

<Avatar bind:path={avatar_url} on:upload={updateProfile} />

<form
	use:getProfile
	class="form-widget flex flex-col gap-2 rounded-lg bg-slate-100 p-8 shadow-lg"
	on:submit|preventDefault={updateProfile}
>
	<div class="form-label-input">
		<label for="email">Email</label>
		<input
			id="email"
			type="text"
			value={$user.email}
			disabled
			placeholder="Username or E-mail"
			class="font-light text-slate-500"
		/>
	</div>
	<div class="form-label-input">
		<label for="username">Name</label>
		<input id="username" type="text" bind:value={username} placeholder="Name" />
	</div>
	<div class="form-label-input">
		<label for="website">Website</label>
		<input id="website" type="website" bind:value={website} placeholder="Website" />
	</div>

	<div class="mx-auto w-full py-1 text-center">
		<input
			type="submit"
			class="button w-full cursor-pointer bg-slate-700 bg-gradient-to-br text-white shadow  duration-300 ease-linear hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-lg"
			value={loading ? 'Loading ...' : 'Update'}
			disabled={loading}
		/>
	</div>

	<div class="mx-auto w-full py-1 text-center">
		<button
			class="button w-full cursor-pointer rounded-full bg-slate-400 bg-gradient-to-br py-1 text-lg text-slate-700 shadow duration-300 ease-linear hover:-translate-y-0.5 hover:bg-slate-500 hover:text-slate-800 hover:shadow-lg"
			value={loading ? 'Loading ...' : 'Update'}
			on:click={signOut}
			disabled={loading}
		>
			Sign Out
		</button>
	</div>
</form>

<style>
	label {
		@apply hidden text-neutral-800;
	}

	input {
		@apply rounded-full py-2 px-4 font-semibold;
	}

	.form-label-input {
		display: grid;
	}
</style>
