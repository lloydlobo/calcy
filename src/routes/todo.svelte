<script content="module" lang="ts">
	import { browser, dev } from '$app/env';
	import TodoForm from '$lib/components/TodoForm.svelte';
	import Todo from '$lib/components/Todo.svelte';
	import { todos } from '$lib/stores/todoStore';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Todo</title>
	<meta name="description" content="Todo" />
</svelte:head>

<div class="todo flex flex-col">
	<!-- <h1>To do or not to do</h1> -->
	<!-- <p class="text-xs text-slate-500">tu tu to-do ...</p> -->
	<TodoForm />
	<!-- cant access store directly - so prefix with `$` sign -->
	{#each $todos as todo}
		<Todo {todo} />
	{/each}
</div>

<style>
	.todo {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
