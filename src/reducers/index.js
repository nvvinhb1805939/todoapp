import { combineReducers } from 'redux';
import todo from './todo.js';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
