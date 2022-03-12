const initialState = [];
const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_TODO':
      const newAddedState = [...state, action.payload];
      return newAddedState;
    case 'DELETE_TODO':
      const todoRemovedIndex = state.findIndex(todo => todo.id === action.payload);
      const newDeletedState = [...state];
      newDeletedState.splice(todoRemovedIndex, 1);
      return newDeletedState;
    case 'EDIT_TODO':
      const todoEditedIndex = state.findIndex(todo => todo.id === action.payload.id);
      const newEditedState = [...state];
      newEditedState[todoEditedIndex] = action.payload;
      return newEditedState;
    default:
      return state;
  }
};

export default todo;
