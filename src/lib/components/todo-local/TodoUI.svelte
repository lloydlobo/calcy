<script lang="ts">
	import { todos } from '$lib/stores/todoLocalStore';
	import TodoForm from '$lib/components/todo-local/TodoFormLocal.svelte';
	import TodoLocal from '$lib/components/todo-local/TodoLocal.svelte';
</script>

<div class="todos-wrapper flex flex-col">
	<TodoForm />

	{#each $todos as todo}
		<TodoLocal {todo} />
	{/each}
</div>
