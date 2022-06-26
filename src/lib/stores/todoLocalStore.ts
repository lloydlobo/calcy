import { writable, type Writable } from 'svelte/store';

export interface TodoInterface {
	text: string;
	completed: boolean;
	id: number;
}

export const todos: Writable<TodoInterface[]> = writable([]);
// { text: 'Fun Task', completed: true }, { text: 'Boring Task', completed: false }

// //////////////////////////CRUD///////////////////////////////////
// CRUD - Create Read Update Delete
// /////////////////////////////////////////////////////////////////
/**
 * Create (c of crud)
 */
export const addTodo = (text: string) => {
	todos.update((current) => [...current, { text, completed: false, id: Date.now() }]);
};

/**
 * Delete (d of crud)
 */
export const deleteTodo = (id: number) => {
	todos.update((todos) => {
		return todos.filter((todo) => todo.id !== id);
	});
};

/**
 * Update (u of crud)
 */
export const toggleTodoCompleted = (id: number) => {
	todos.update((todos) => {
		let index = -1; // empty todo has index of -1. won't use null

		for (let i = 0; i < todos.length; i += 1) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}

		const todoIsFoundAfterLoopBreaks = index !== -1;

		if (todoIsFoundAfterLoopBreaks) {
			const todoIsCompletedAndTrue = todos[index].completed as boolean;
			todos[index].completed = !todoIsCompletedAndTrue; // false
		}

		return todos;
	});
};
