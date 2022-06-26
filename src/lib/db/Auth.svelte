<script>
	import { supabase } from '$lib/db/supabaseClient';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<form class=" flex flex-col" on:submit|preventDefault={handleLogin}>
	<div class=" form-widget flex flex-col gap-4 rounded-lg bg-slate-50 px-8 py-4 shadow">
		<h1 class="header text-3xl">Sign In</h1>
		<p class="description text-sm font-bold text-slate-600">
			Sign in via magic link with your email below
		</p>
		<div>
			<input
				class="inputField w-full rounded-full py-2 px-4 font-semibold text-slate-800 placeholder:text-slate-400"
				type="email"
				placeholder="Your email"
				bind:value={email}
			/>
		</div>
		<div>
			<input
				type="submit"
				class="button  button  w-full cursor-pointer rounded-full bg-slate-700 bg-gradient-to-br py-2 text-slate-50 shadow-md duration-300  ease-linear hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-lg"
				value={loading ? 'Loading' : 'Send magic link'}
				disabled={loading}
			/>
		</div>
	</div>
</form>
