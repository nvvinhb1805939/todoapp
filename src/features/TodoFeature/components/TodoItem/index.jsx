import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './TodoItem.scss';

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
TodoItem.defaultProps = {
  content: '',
  onEditClick: null,
  onDeleteClick: null,
};

function TodoItem(props) {
  const { title, content, onEditClick, onDeleteClick } = props;

  const handleEditClick = () => {
    if (!onEditClick) return;
    onEditClick();
  };
  const handleDeleteClick = () => {
    if (!onDeleteClick) return;
    onDeleteClick();
  };

  return (
    <Card className='todo-item' sx={{ boxShadow: 'none' }}>
      <CardHeader
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
        <Typography paragraph variant='body2' gutterBottom>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TodoItem;
