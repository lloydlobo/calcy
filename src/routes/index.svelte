<script context="module" lang="ts">
	export const prerender = true;
	import { todos } from '$lib/stores/todoLocalStore';
	import TodoForm from '$lib/components/TodoForm.svelte';
	import Todo from '$lib/components/Todo.svelte';
</script>

<script lang="ts">
	import Calculator from '$lib/Calculator.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-1 flex-col items-center justify-center">
	<Calculator />
</section>

<section class="todos">
	<!-- prettier-ignore -->
	<div class="todo flex flex-col"> <TodoForm /> {#each $todos as todo} <Todo {todo} /> {/each} </div>
</section>

<style>
	.todo {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
