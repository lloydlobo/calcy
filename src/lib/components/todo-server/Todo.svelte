<script lang="ts">
	import {
		deleteTodo,
		toggleTodoCompleted,
		type TodoInterface
	} from '$lib/stores/todoSupabaseStore';

	export let todo: TodoInterface; // accepting props
</script>

<li class="my-2 flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 shadow-sm">
	<input
		name="completed"
		type="checkbox"
		value=""
		checked={todo.completed}
		on:change={() => toggleTodoCompleted(todo.id, todo.completed)}
		class="form-checkbox mr-2 h-5 w-5"
	/>

	<div class="flex-1">
		<span
			contenteditable="true"
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
