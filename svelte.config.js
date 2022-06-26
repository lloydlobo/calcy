import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		// Deploy Supabase on Vercel with Supabase's Tokens and ENV variables
		vite: {
			define: {
				'process.env': process.env
			}
		},

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;

// cspell:ignore Supabase sveltejs

// hydrate the <div id="svelte"> element in src/app.html
// // target: '#svelte', // > config.kit.target is no longer required, and should be removed
