import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';
import './TodoForm.scss';
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().trim().required('This field is not empty').min(3, 'This field contains at least 3 characters'),
    description: yup.string(),
  });

  const { handleSubmit, reset, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log({ data });
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction='column' rowSpacing={3}>
        <Grid item>
          <InputField name='title' label='Title' control={control} />
        </Grid>
        <Grid item>
          <InputField name='description' label='Description' control={control} multiline rows={5} />
        </Grid>
        <Grid item>
          <Button sx={{ fontSize: 'unset' }} variant='outlined' color='secondary' type='submit' size='large'>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TodoForm;
