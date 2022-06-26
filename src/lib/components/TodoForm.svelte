<script lang="ts">
	import { spring } from 'svelte/motion';
	import {
		todos,
		addTodo,
		deleteTodo,
		toggleTodoCompleted
		// loadTodos,
		// name
	} from '$lib/stores/todoStore';

	let todo = '';

	export const handleSubmit = () => {
		// e.preventDefault(); // add svelte binding pipe operator for conciseness
		addTodo(todo);
		todo = ''; // Reset Todo text

		console.log('submitting...');
	};
</script>

<p class="binding animate-pulse font-serif italic duration-100">{todo}&nbsp</p>
<form on:submit|preventDefault={handleSubmit} class="form-todo my-6" action="">
	<div class="wrap mb-2 flex flex-col text-sm">
		<h1 class="mb-4 font-light">
			<label class="label mb-2 text-center font-light text-slate-800" for="todo">Todo</label>
		</h1>
		<input
			type="text"
			bind:value={todo}
			id=""
			name="todo"
			placeholder="scooby doo bee doo. Watcha gotta do?"
			class="todo-input appearance-none rounded-full border border-slate-200 px-4 py-2 shadow-sm focus:border-slate-500 focus:outline-none"
		/>
	</div>
	<button
		type="submit"
		class="w-full rounded-lg bg-red-600 py-2 px-4 text-slate-50 shadow-sm  duration-200 ease-in-out hover:bg-red-500 hover:text-white hover:shadow-xl hover:ease-in active:translate-y-1"
		>Submit</button
	>
</form>
