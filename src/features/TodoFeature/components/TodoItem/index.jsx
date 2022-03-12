import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './TodoItem.scss';

TodoItem.propTypes = {
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
  const { id, title, description, onEditClick, onDeleteClick } = props;

  const handleEditClick = () => {
    if (!onEditClick) return;
    onEditClick(id);
  };
  const handleDeleteClick = () => {
    if (!onDeleteClick) return;
    onDeleteClick(id);
  };

  return (
    <Card className='todo-item' sx={{ boxShadow: 'none' }}>
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
  );
}

export default TodoItem;
