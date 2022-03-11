import AddIcon from '@mui/icons-material/Add';
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from '../TodoItem';
import './TodoList.scss';

TodoList.propTypes = {
  status: PropTypes.string.isRequired,
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
  const { status, quantiy, itemList, onAddClick, onEditClick, onDeleteClick } = props;

  const handleAddClick = () => {
    if (!onAddClick) return;
    onAddClick();
  };

  return (
    <Grid item xs={4} className='todo-list'>
      <Box className='todo-list__wrapper'>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography className='todo-list__heading' sx={{ marginBottom: 0 }} variant='h4' gutterBottom>
            {status}
          </Typography>
          <div className='todo-list__quantity'>
            <span>{quantiy}</span>
          </div>
        </Stack>
        <IconButton className='todo-list__btn' onClick={handleAddClick}>
          <AddIcon />
        </IconButton>
        <Stack spacing={3}>
          {itemList.map(item => (
            <TodoItem
              key={item.id}
              title={item.title}
              content={item.content}
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </Stack>
      </Box>
    </Grid>
  );
}

export default TodoList;
