<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// import Counter from '$lib/Counter.svelte';
	import Calculator from '$lib/Calculator.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-1 flex-col items-center justify-center">
	<Calculator />
	<!-- <Counter /> -->
</section>

<style>
</style>
