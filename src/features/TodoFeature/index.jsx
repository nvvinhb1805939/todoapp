import { Grid } from '@mui/material';
import React, { useState } from 'react';
import ModalComponent from '../../components/ModalComponent';
import TodoList from './components/TodoList';
import './Todo.scss';

TodoFeature.propTypes = {};

const itemList = [
  {
    id: 1,
    title: 'title 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    status: 0,
  },
  {
    id: 2,
    title: 'title 2',
    content:
      'Aperiam at fuga laborum iusto sint sed, praesentium neque dolorem architecto autem illo recusandae officia temporibus totam voluptatibus possimus magni rem. Suscipit.',
    status: 0,
  },
  {
    id: 3,
    title: 'title 3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    status: 1,
  },
  {
    id: 4,
    title: 'title 4',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    status: 2,
  },
];

const todoList = itemList.filter(item => item.status === 0);
const inProgressList = itemList.filter(item => item.status === 1);
const completedList = itemList.filter(item => item.status === 2);

function TodoFeature(props) {
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleOnAddClick = () => {
    setShow(true);
  };
  const handleCloseClick = () => {
    setShow(false);
    setIsEdit(false);
  };
  const handleEditClick = () => {
    setShow(true);
    setIsEdit(true);
  };
  const handleDeleteClick = () => {
    window.confirm('Would you like to delete it?');
  };

  return (
    <Grid className='todo' container>
      <TodoList
        status='To do'
        quantiy={2}
        itemList={todoList}
        onAddClick={handleOnAddClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
      <TodoList
        status='In progress'
        quantiy={1}
        itemList={inProgressList}
        onAddClick={handleOnAddClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
      <TodoList
        status='Completed'
        itemList={completedList}
        onAddClick={handleOnAddClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
      <ModalComponent isShow={show} isEdit={isEdit} onCloseClick={handleCloseClick} />
    </Grid>
  );
}

export default TodoFeature;
