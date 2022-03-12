import React from 'react';
import PropTypes from 'prop-types';
import { Box, Modal, Typography } from '@mui/material';
import TodoForm from '../../features/TodoFeature/components/TodoForm';
import './ModalComponent.scss';

ModalComponent.propTypes = {
  isShow: PropTypes.bool,
  onCloseClick: PropTypes.func,
  isEdit: PropTypes.bool,
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
};
ModalComponent.defaultProps = {
  isShow: false,
  onCloseClick: null,
  isEdit: false,
  onSubmit: null,
  defaultValues: {
    title: '',
    description: '',
  },
};

function ModalComponent(props) {
  const { isShow, onCloseClick, isEdit, onSubmit, defaultValues } = props;
  const handleCloseClick = () => {
    if (!onCloseClick) return;
    onCloseClick();
  };
  return (
    <Modal open={isShow} onClose={handleCloseClick}>
      <Box className='modal__container'>
        <Typography className='modal__heading' variant='h4'>
          {isEdit ? 'Edit card' : 'Add card'}
        </Typography>
        <TodoForm onSubmit={onSubmit} isEdit={isEdit} defaultValues={defaultValues} />
      </Box>
    </Modal>
  );
}

export default ModalComponent;
