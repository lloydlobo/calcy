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

<section class="flex flex-col justify-center items-center flex-1">
	<Calculator />
	<!-- <Counter /> -->
</section>

<style>
</style>
