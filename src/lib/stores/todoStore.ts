import { writable, type Writable } from 'svelte/store';

export interface TodoInterface {
	id: number;
	text: string;
	completed: boolean;
}

export const todos: Writable<TodoInterface[]> = writable([]);

export const addTodo = (text: string) => {
	todos.update((current) => {
		const newTodos = [...current, { text, completed: false, id: Date.now() }];
		return newTodos;
	});
};

export const deleteTodo = (id: number) => {
	todos.update((todos) =>
		todos.filter((todo) => {
			const filterOutTodoWithThisId = todo.id !== id;
			return filterOutTodoWithThisId;
			// todo.id !== id;
		})
	); // implicit return: todos.filter((todo) => todo.id !== id)
};

export const toggleTodoCompleted = (id: number): void => {
	todos.update((todos): TodoInterface[] => {
		let index = -1;
		for (let i = 0; i < todos.length; i += 1) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		} // end of for loop

		const todoIsFound = index !== -1;
		if (todoIsFound) {
			const ifCompletedFlipTheNewTodo = !todos[index].completed;
			todos[index].completed = ifCompletedFlipTheNewTodo;
		}

		return todos;
	}); // end of todos.update
}; // toggleTodoCompleted()

// ///////////////////////////////////////////////////////////////

// export const name = writable('Svelte');

// CSPELL:ignore todos
