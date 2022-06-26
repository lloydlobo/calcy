// import { writable, type Writable } from 'svelte/store';
// import { supabase } from '$lib/SupabaseLib';

export interface TodoInterface {
	id: number;
	text: string;
	completed: boolean;
}

// export const todos: Writable<TodoInterface[]> = writable([]);

// export const name = writable('Svelte');

// export const loadTodos = async () => {
// 	const { data, error } = await supabase.from('todos').select();

// 	if (error) {
// 		return console.error(error);
// 	}
// 	todos.set(data);
// };

// export const addTodo = async (text: string, user_id = 'text') => {
// 	const { data, error } = await supabase
// 		.from('todos')
// 		.insert([{ text, user_id, completed: false }]);

// 	if (error) {
// 		return console.error(error);
// 	}

// 	todos.update((current) => [...current, data[0]]); // new todos
// };

// export const deleteTodo = async (id: number) => {
// 	const { error } = await supabase.from('todos').delete().match({ id });

// 	if (error) {
// 		return console.error(error);
// 	}

// 	todos.update((todos) => todos.filter((todo) => todo.id !== id));
// };

// export const toggleTodoCompleted = async (id: number, currentState: boolean) => {
// 	const { error } = await supabase.from('todos').update({ completed: !currentState }).match({ id });

// 	if (error) {
// 		return console.error(error);
// 	}

// 	todos.update((todos) => {
// 		let index = -1;
// 		for (let i = 0; i < todos.length; i += 1) {
// 			if (todos[i].id === id) {
// 				index = i;
// 				break;
// 			}
// 		} // end of for
// 		if (index !== -1) {
// 			todos[index].completed = !todos[index].completed;
// 		}
// 		return todos;
// 	});
// };

// // ////////////////////////////////EOF/////////////////////////////////////////

// // cspell:ignore Todos supabase
