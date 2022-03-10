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
    contentList: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Aperiam at fuga laborum iusto sint sed, praesentium neque dolorem architecto autem illo recusandae officia temporibus totam voluptatibus possimus magni rem. Suscipit.',
    ],
    status: 0,
  },
  {
    id: 2,
    title: 'title 2',
    contentList: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Aperiam at fuga laborum iusto sint sed, praesentium neque dolorem architecto autem illo recusandae officia temporibus totam voluptatibus possimus magni rem. Suscipit.',
    ],
    status: 0,
  },
  {
    id: 3,
    title: 'title 3',
    contentList: ['Lorem ipsum dolor sit amet consectetur adipisicing elit'],
    status: 1,
  },
  {
    id: 4,
    title: 'title 4',
    contentList: ['Lorem ipsum dolor sit amet consectetur adipisicing elit'],
    status: 2,
  },
];

const todoList = itemList.filter(item => item.status === 0);
const inProgressList = itemList.filter(item => item.status === 1);
const completedList = itemList.filter(item => item.status === 2);

function TodoFeature(props) {
  const [show, setShow] = useState(false);
  const handleOnAddClick = () => {
    setShow(true);
  };
  const handleCloseClick = () => {
    setShow(false);
  };

  return (
    <Grid className='todo' container>
      <TodoList status='To do' quantiy={2} itemList={todoList} onAddClick={handleOnAddClick} />
      <TodoList status='In progress' quantiy={1} itemList={inProgressList} onAddClick={handleOnAddClick} />
      <TodoList status='Completed' itemList={completedList} onAddClick={handleOnAddClick} />
      <ModalComponent isShow={show} onCloseClick={handleCloseClick} />
    </Grid>
  );
}

export default TodoFeature;
