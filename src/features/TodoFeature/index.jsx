import { Grid } from '@mui/material';
import casual from 'casual-browserify';
import React, { useContext, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { TodoContext } from '../../App';
import ModalComponent from '../../components/ModalComponent';
import TodoList from './components/TodoList';
import './Todo.scss';

function TodoFeature() {
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [status, setStatus] = useState(0);
  const [defaultValues, setDefaultValues] = useState({});

  const { todoList, setTodoList, filterTodoList } = useContext(TodoContext);
  const dataList = filterTodoList.length > 0 ? [...filterTodoList] : [...todoList];

  const handleOnAddClick = newStatus => {
    setIsShow(true);
    setStatus(newStatus);
  };
  const handleCloseClick = () => {
    setIsShow(false);
    setIsEdit(false);
  };
  const handleEditClick = (listId, id) => {
    setIsShow(true);
    setIsEdit(true);
    setStatus(listId);
    const editedTodo = todoList[listId].value.find(todo => todo.id === id);
    setDefaultValues(editedTodo);
  };
  const handleDeleteClick = (listId, id) => {
    const isDelete = window.confirm('Would you like to delete it?');
    if (!isDelete) return;
    const removedIndex = todoList[listId].value.findIndex(todo => todo.id === id);
    const newTodoList = [...todoList];
    newTodoList[listId].value.splice(removedIndex, 1);
    setTodoList(newTodoList);
  };
  const handleOnSubmit = data => {
    if (!isEdit) {
      const id = casual.uuid;
      const newTodo = { ...data, id };
      const newTodoList = [...todoList];
      newTodoList.splice(status, 1, {
        title: todoList[status].title,
        value: [...todoList[status].value, newTodo],
      });
      setTodoList(newTodoList);
    } else {
      const editedIndex = todoList[status].value.findIndex(todo => todo.id === data.id);
      const newTodoList = [...todoList];
      newTodoList[status].value[editedIndex] = data;
      setTodoList(newTodoList);
    }
    setIsShow(false);
    setIsEdit(false);
  };
  const handleOnDragEnd = result => {
    const { destination, source } = result;
    const newTodoList = [...todoList];
    let sourceItem = {};
    if (!destination) return;
    [sourceItem] = newTodoList[source.droppableId].value.splice(source.index, 1);
    newTodoList[destination.droppableId].value.splice(destination.index, 0, sourceItem);
    setTodoList(newTodoList);
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Grid className='todo' container>
        {todoList.map((ITEM_LIST, index) => (
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
