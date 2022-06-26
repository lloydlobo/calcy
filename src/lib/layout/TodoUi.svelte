<script lang="ts">
	import { todos } from '$lib/stores/todoLocalStore';
	import Todo from '$lib/components/Todo.svelte';
	import TodoForm from '$lib/components/TodoForm.svelte';
</script>

<div class="todos-wrapper flex flex-col">
	<TodoForm />

	{#each $todos as todo}
		<Todo {todo} />
	{/each}
</div>
