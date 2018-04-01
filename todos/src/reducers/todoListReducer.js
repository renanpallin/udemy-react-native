import { ADD_TODO } from '../actions';

let nextId = 1;

const todoListReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			console.log('addTodo foi chamado!!', action.text)
			const newTodo = {
				id: nextId++,
				text: action.text
			}
			return [...state, newTodo]
		default:
			return state;
	}
}

export default todoListReducer;