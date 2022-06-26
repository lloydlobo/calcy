<script>
	import { createEventDispatcher } from 'svelte';
	import { supabase } from '$lib/db/supabaseClient';

	export let path;
	export let size = '10em';

	let uploading = false;
	let src;
	let files;

	const dispatch = createEventDispatcher();

	async function downloadImage() {
		try {
			const { data, error } = await supabase.storage.from('avatars').download(path);
			if (error) throw error;

			src = URL.createObjectURL(data);
		} catch (error) {
			console.error('Error downloading image: ', error.message);
		}
	}

	async function uploadAvatar() {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const fileName = `${Math.random()}.${fileExt}`;
			const filePath = `${fileName}`;

			let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

			if (uploadError) throw uploadError;

			path = filePath;
			dispatch('upload');
		} catch (error) {
			alert(error.message);
		} finally {
			uploading = false;
		}
	}
</script>

<div class="container mx-auto grid place-items-center items-center place-self-center">
	{#if path}
		<img
			use:downloadImage
			{src}
			alt="Avatar"
			class="avatar image h-auto w-full bg-slate-200 p-3 shadow"
			style="height: {size}; width: {size};"
		/>
	{:else}
		<div class="avatar no-image hidden" style="height: {size}; width: {size};" />
	{/if}

	<div class="mx-auto text-center" style="width: {size};">
		<label
			class="button primary mb-2 block w-full cursor-pointer rounded bg-slate-200  px-4 py-1 text-center text-sm text-slate-500"
			for="single"
		>
			{uploading ? 'Uploading ...' : 'Upload Avatar'}
		</label>
		<input
			style="visibility: hidden; position:absolute;"
			type="file"
			id="single"
			accept="image/*"
			bind:files
			on:change={uploadAvatar}
			disabled={uploading}
		/>
	</div>
</div>
