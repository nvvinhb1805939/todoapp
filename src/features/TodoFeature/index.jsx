import { Grid } from '@mui/material';
import casual from 'casual-browserify';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, deleteTodo, editTodo } from '../../actions/todo';
import ModalComponent from '../../components/ModalComponent';
import TodoList from './components/TodoList';
import './Todo.scss';

function TodoFeature() {
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [status, setStatus] = useState(0);
  const [defaultValues, setDefaultValues] = useState({});
  const TODO_LIST = useSelector(state => state.todo);
  const todoList = TODO_LIST.filter(item => item.status === 0);
  const inProgressList = TODO_LIST.filter(item => item.status === 1);
  const completedList = TODO_LIST.filter(item => item.status === 2);
  const dispatch = useDispatch();

  const handleOnAddClick = newStatus => {
    setIsShow(true);
    setStatus(newStatus);
  };
  const handleCloseClick = () => {
    setIsShow(false);
    setIsEdit(false);
  };
  const handleEditClick = id => {
    setIsShow(true);
    setIsEdit(true);
    const editedTodo = TODO_LIST.find(todo => todo.id === id);
    setDefaultValues(editedTodo);
  };
  const handleDeleteClick = id => {
    const isDelete = window.confirm('Would you like to delete it?');
    if (!isDelete) return;
    const action = deleteTodo(id);
    dispatch(action);
  };
  const handleOnSubmit = data => {
    if (!isEdit) {
      const id = casual.uuid;
      const newTodo = { ...data, id, status };
      const action = addNewTodo(newTodo);
      dispatch(action);
    } else {
      const action = editTodo(data);
      dispatch(action);
      setIsEdit(false);
    }
    setIsShow(false);
  };

  return (
    <Grid className='todo' container>
      <TodoList
        quantiy={todoList.length}
        itemList={todoList}
        onAddClick={handleOnAddClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
      <TodoList
        status={1}
        quantiy={inProgressList.length}
        itemList={inProgressList}
        onAddClick={handleOnAddClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
      <TodoList
        status={2}
        quantiy={completedList.length}
        itemList={completedList}
        onAddClick={handleOnAddClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
      <ModalComponent
        isShow={isShow}
        isEdit={isEdit}
        onCloseClick={handleCloseClick}
        onSubmit={handleOnSubmit}
        defaultValues={defaultValues}
      />
    </Grid>
  );
}

export default TodoFeature;
