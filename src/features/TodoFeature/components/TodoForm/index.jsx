import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import './TodoForm.scss';
import clsx from 'clsx';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
  isEdit: PropTypes.bool,
  defaultValues: PropTypes.object,
};
TodoForm.defaultProps = {
  onSubmit: null,
  isEdit: false,
  defaultValues: {
    title: '',
    description: '',
  },
};

function TodoForm({ onSubmit, isEdit, defaultValues }) {
  const schema = yup.object().shape({
    title: yup.string().trim().required('This field is not empty').min(3, 'This field contains at least 3 characters'),
    description: yup.string(),
  });

  const formValues = isEdit
    ? defaultValues
    : {
        title: '',
        description: '',
      };

  const {
    formState: { isSubmitting },
    handleSubmit,
    control,
  } = useForm({
    mode: 'onChange',
    defaultValues: formValues,
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = data => {
    if (!onSubmit) return;
    return new Promise(resolve => {
      setTimeout(() => {
        onSubmit(data);
        resolve(true);
      }, 2000);
    });
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit(handleOnSubmit)}>
      <Grid container direction='column' rowSpacing={3}>
        <Grid item>
          <InputField name='title' label='Title' control={control} />
        </Grid>
        <Grid item>
          <InputField name='description' label='Description' control={control} multiline rows={5} />
        </Grid>
        <Grid item>
          <Button
            className={clsx({
              'todo-form__btn': true,
              loading: isSubmitting,
            })}
            sx={{ fontSize: 'unset' }}
            variant='outlined'
            color='secondary'
            type='submit'
            size='large'
          >
            {isSubmitting ? <CircularProgress color='secondary' size={24.5} /> : 'Save'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TodoForm;
