import React from 'react';
import PropTypes from 'prop-types';
import { Box, Modal, Typography } from '@mui/material';
import TodoForm from '../../features/TodoFeature/components/TodoForm';
import './ModalComponent.scss';

ModalComponent.propTypes = {
  isShow: PropTypes.bool,
  onCloseClick: PropTypes.func,
};
ModalComponent.defaultProps = {
  isShow: false,
  onCloseClick: null,
};

function ModalComponent({ isShow, onCloseClick }) {
  const handleCloseClick = () => {
    if (!onCloseClick) return;
    onCloseClick();
  };
  return (
    <Modal open={isShow} onClose={handleCloseClick}>
      <Box className='modal__container'>
        <Typography className='modal__heading' variant='h4'>
          Add card
        </Typography>
        <TodoForm />
      </Box>
    </Modal>
  );
}

export default ModalComponent;
