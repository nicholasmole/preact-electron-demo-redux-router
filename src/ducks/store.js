import { createStore } from 'redux';


export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text
	};
}

export function removeTodo(todo) {
	return {
		type: 'REMOVE_TODO',
		todo
	};
}

let ACTIONS = {
	ADD_TODO: ({ todos, ...state }, { text }) => ({
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text
		}],
		...state
	}),

	REMOVE_TODO: ({ todos, ...state }, { todo }) => ({
		todos: todos.filter( i => i!==todo ),
		...state
	})
};

const INITIAL = {
	todos: []
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, undefined);