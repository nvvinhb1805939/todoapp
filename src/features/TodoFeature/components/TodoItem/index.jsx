import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './TodoItem.scss';
import clsx from 'clsx';

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
TodoItem.defaultProps = {
  description: '',
  onEditClick: null,
  onDeleteClick: null,
};

function TodoItem(props) {
  const { index, id, title, description, onEditClick, onDeleteClick } = props;

  const handleEditClick = () => {
    if (!onEditClick) return;
    onEditClick(id);
  };
  const handleDeleteClick = () => {
    if (!onDeleteClick) return;
    onDeleteClick(id);
  };

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided, snapshot) => (
        <Card
          className={clsx({ 'todo-item': true, dragging: snapshot.isDragging })}
          sx={{ boxShadow: 'none' }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardHeader
            sx={{ paddingBottom: 0 }}
            className='todo-item__heading'
            action={
              <>
                <IconButton onClick={handleDeleteClick}>
                  <DeleteOutlineIcon />
                </IconButton>
                <IconButton onClick={handleEditClick}>
                  <ModeEditOutlineOutlinedIcon />
                </IconButton>
              </>
            }
            title={title}
          />
          <CardContent>
            <Typography sx={{ marginBottom: 0, whiteSpace: 'pre-line' }} paragraph variant='body2'>
              {description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}

export default TodoItem;
