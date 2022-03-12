import AddIcon from '@mui/icons-material/Add';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import STATUS_LIST from '../../../../constant/statusList';
import TodoItem from '../TodoItem';
import './TodoList.scss';

TodoList.propTypes = {
  status: PropTypes.number,
  quantiy: PropTypes.number,
  itemList: PropTypes.array,
  onAddClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
TodoList.defaultProps = {
  status: 0,
  quantiy: 0,
  itemList: [],
  onAddClick: null,
  onEditClick: null,
  onDeleteClick: null,
};

function TodoList(props) {
  const { status, quantiy, itemList, onAddClick, onEditClick, onDeleteClick } = props;

  const handleAddClick = () => {
    if (!onAddClick) return;
    onAddClick(status);
  };

  return (
    <Droppable key={status} droppableId={`${status}`}>
      {(provided, snapshot) => (
        <Grid item xs={4} className='todo-list' {...provided.droppableProps}>
          <Box className='todo-list__wrapper'>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Typography className='todo-list__heading' sx={{ marginBottom: 0 }} variant='h4' gutterBottom>
                {STATUS_LIST[status]}
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
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {provided => (
                    <TodoItem
                      ref={provided.innerRef}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      onEditClick={onEditClick}
                      onDeleteClick={onDeleteClick}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
            </Stack>
          </Box>
        </Grid>
      )}
    </Droppable>
  );
}

export default TodoList;
