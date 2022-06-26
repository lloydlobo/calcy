<script context="module" lang="ts">
	export const prerender = true;
	import { todos } from '$lib/stores/todoSupabaseStore';
	import TodoForm from '$lib/components/todo-server/TodoForm.svelte';
	import Todo from '$lib/components/todo-server/Todo.svelte';
</script>

<script lang="ts">
	import Calculator from '$lib/Calculator.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Calculator app" />
</svelte:head>

<section class="todos">
	<div class="todo flex flex-col">
		<TodoForm />
		{#each $todos as todo} <Todo {todo} /> {/each}
	</div>
</section>

<section class="calculator flex flex-1 flex-col items-center justify-center">
	<Calculator />
</section>

<style>
	.todo {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
