import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './TodoItem.scss';

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  contentList: PropTypes.array,
};
TodoItem.defaultProps = {
  contentList: [],
};

function TodoItem(props) {
  const { title, contentList } = props;
  return (
    <Card className='todo-item' sx={{ boxShadow: 'none' }}>
      <CardHeader
        className='todo-item__heading'
        action={
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        }
        title={title}
      />
      <CardContent>
        {contentList.map(contentItem => (
          <Typography key={contentItem} paragraph variant='body2' gutterBottom>
            {contentItem}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default TodoItem;
