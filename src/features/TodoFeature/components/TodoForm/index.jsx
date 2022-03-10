import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';
import './TodoForm.scss';
import { Grid } from '@mui/material';

TodoForm.propTypes = {};

function TodoForm(props) {
  return (
    <form className='todo-form'>
      <Grid container direction='column' rowSpacing={3}>
        <Grid item>
          <TextField
            className='todo-form__input'
            sx={{ width: '100%' }}
            variant='outlined'
            color='secondary'
            label='Title'
          />
        </Grid>
        <Grid item>
          <TextField
            className='todo-form__input'
            sx={{ width: '100%' }}
            variant='outlined'
            color='secondary'
            label='Description'
          />
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
