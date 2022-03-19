import { Grid } from '@mui/material';
import casual from 'casual-browserify';
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
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
  const DATA = useSelector(state => state.todo);
  const TODO_LIST = [
    {
      title: 'Todo',
      value: DATA.filter(item => item.status === 0),
    },
    {
      title: 'In progress',
      value: DATA.filter(item => item.status === 1),
    },
    {
      title: 'Completed',
      value: DATA.filter(item => item.status === 2),
    },
  ];
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
    const editedTodo = DATA.find(todo => todo.id === id);
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
  const handleOnDragEnd = result => {
    const { destination, source } = result;
    let sourceItem = {};
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index !== source.index) {
      [sourceItem] = TODO_LIST[source.droppableId].value.splice(source.index, 1);
      TODO_LIST[destination.droppableId].value.splice(destination.index, 0, sourceItem);
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Grid className='todo' container>
        {TODO_LIST.map((ITEM_LIST, index) => (
          <TodoList
            key={index}
            id={index}
            title={ITEM_LIST.title}
            quantiy={ITEM_LIST.value.length}
            itemList={ITEM_LIST.value}
            onAddClick={handleOnAddClick}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
        <ModalComponent
          isShow={isShow}
          isEdit={isEdit}
          onCloseClick={handleCloseClick}
          onSubmit={handleOnSubmit}
          defaultValues={defaultValues}
        />
      </Grid>
    </DragDropContext>
  );
}

export default TodoFeature;
