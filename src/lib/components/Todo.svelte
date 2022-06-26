<script lang="ts">
	// import {Todo}
	import { deleteTodo, toggleTodoCompleted } from '$lib/stores/todoStore';
	import type { TodoInterface } from '$lib/stores/todoStore';
	export let todo: TodoInterface; // accepting props
	// let todoIsChecked: boolean;
	// $: todoIsChecked = todo.completed === true;
	// let now = Date.now().toString();

	// let styleCompletedTodo = `${
	// 	todo.completed ? 'line-through translate-y-2 ease-in shadow-none grayscale opacity-70' : ''
	// }`;
</script>

<li class="my-2 flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 shadow-sm">
	<input
		name="completed"
		type="checkbox"
		value=""
		checked={todo.completed}
		on:change={() => toggleTodoCompleted(todo.id)}
		class="form-checkbox mr-2 h-5 w-5"
	/>

	<!-- contenteditable="true" -->
	<div class="flex-1">
		<span
			class={`todo-text flex-1 grayscale-0 text-slate-800 ${
				todo.completed
					? 'line-through  transition-all duration-500 ease-in shadow-none grayscale opacity-70'
					: ''
			}`}
		>
			{todo.text}
		</span>
	</div>

	<button
		on:click={() => deleteTodo(todo.id)}
		type="button"
		class="focus:shadow-outline rounded bg-red-600 py-1 px-2 text-sm text-white hover:bg-red-500 focus:outline-none"
		>X</button
	>
</li>

<!-- bind:innerHTML={now} -->
<style>
</style>
