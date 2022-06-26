<script context="module" lang="ts">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<script>
	import TodoForm from '$lib/components/todo-local/TodoFormLocal.svelte';
	import Todo from '$lib/components/todo-local/TodoLocal.svelte';
	import { todos } from '$lib/stores/todoLocalStore';
</script>

<svelte:head>
	<title>Todo</title>
	<meta name="description" content="Todo" />
</svelte:head>

<!-- <div class="todo flex flex-col"> <TodoForm /> {#each $todos as todo} <Todo {todo} /> {/each} </div> -->
<div class="todo flex flex-col">
	<TodoForm />
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
