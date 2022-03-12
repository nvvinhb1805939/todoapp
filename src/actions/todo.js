export const addNewTodo = todo => ({ type: 'ADD_NEW_TODO', payload: todo });
export const deleteTodo = todo => ({ type: 'DELETE_TODO', payload: todo });
export const editTodo = todo => ({ type: 'EDIT_TODO', payload: todo });
