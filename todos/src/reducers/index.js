import { combineReducers } from 'redux';

import todoListReducer from './todoListReducer';
import editingTodoReducer from './editingTodoReducer';

const rootReducer = combineReducers({
	todos: todoListReducer,
	editingTodo: editingTodoReducer
});

export default rootReducer;