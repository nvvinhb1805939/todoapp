import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  rest: PropTypes.object,
};
InputField.defaultProps = {
  rest: null,
};

function InputField(props) {
  const { name, control, label, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange }, formState: { errors } }) => (
        <TextField
          className='todo-form__input'
          sx={{ width: '100%' }}
          variant='outlined'
          color='secondary'
          label={label}
          onChange={onChange}
          error={!!errors?.[name]}
          helperText={errors?.[name]?.message}
          {...rest}
        />
      )}
    />
  );
}

export default InputField;
