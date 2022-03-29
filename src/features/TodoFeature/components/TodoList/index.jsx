import AddIcon from '@mui/icons-material/Add';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TodoItem from '../TodoItem';
import './TodoList.scss';

TodoList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  quantiy: PropTypes.number,
  itemList: PropTypes.array,
  onAddClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
TodoList.defaultProps = {
  quantiy: 0,
  itemList: [],
  onAddClick: null,
  onEditClick: null,
  onDeleteClick: null,
};

function TodoList(props) {
  const { id, title, quantiy, itemList, onAddClick, onEditClick, onDeleteClick } = props;

  const handleAddClick = () => {
    if (!onAddClick) return;
    onAddClick(id);
  };

  return (
    <Grid item xs={4} className='todo-list'>
      <Droppable droppableId={`${id}`}>
        {provided => (
          <Box className='todo-list__wrapper' ref={provided.innerRef} {...provided.droppableProps}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Typography className='todo-list__heading' sx={{ marginBottom: 0 }} variant='h4' gutterBottom>
                {title}
              </Typography>
              <div className='todo-list__quantity'>
                <span>{quantiy}</span>
              </div>
            </Stack>
            <IconButton className='todo-list__btn' onClick={handleAddClick}>
              <AddIcon />
            </IconButton>
            <Stack spacing={3}>
              {itemList.map((item, index) => (
                <TodoItem
                  index={index}
                  key={item.id}
                  id={item.id}
                  listId={id}
                  title={item.title}
                  description={item.description}
                  onEditClick={onEditClick}
                  onDeleteClick={onDeleteClick}
                />
              ))}
            </Stack>
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Grid>
  );
}

export default TodoList;
