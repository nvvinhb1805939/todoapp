import { ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

ItemButton.propTypes = {
  primary: PropTypes.string,
  onCollapseClick: PropTypes.func,
  isAvatar: PropTypes.bool,
};
ItemButton.defaultProps = {
  primary: '',
  onCollapseClick: null,
  isAvatar: false,
};

function ItemButton(props) {
  const { children, primary, onCollapseClick, isReverse, isAvatar } = props;
  const handleOnCollapseClick = () => {
    if (!onCollapseClick) return;
    onCollapseClick();
  };
  return (
    <ListItemButton
      // sx={isAvatar && { paddingBlock: 0, '&:hover': { background: 'none' } }}
      onClick={handleOnCollapseClick}
      disableGutters={isAvatar}
    >
      {isAvatar ? (
        <ListItemAvatar sx={{ minWidth: 'unset' }}>{children}</ListItemAvatar>
      ) : (
        <>
          <ListItemIcon sx={{ marginRight: '1.2rem', minWidth: 'unset' }}>{children}</ListItemIcon>
          <ListItemText disableTypography primary={primary} />
        </>
      )}
    </ListItemButton>
  );
}

export default ItemButton;
