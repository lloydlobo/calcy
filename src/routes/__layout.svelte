<script lang="ts">
	// import { supabase } from '$lib/SupabaseLib';
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { user } from '$lib/db/sessionStore';
	import { supabase } from '$lib/db/supabaseClient';
	import Profile from '$lib/db/Profile.svelte';
	import Auth from '$lib/db/Auth.svelte';
	// console.log(supabase);

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		return user.set(session.user);
	});
</script>

<Header />
<main class="container mx-auto">
	<!-- supabase login auth -->
	<div class="user-auth mx-auto my-0 p-4 ">
		{#if $user}
			<Profile />
		{:else}
			<Auth />
		{/if}
	</div>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
