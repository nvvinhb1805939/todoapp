import SearchIcon from '@mui/icons-material/Search';
import { Input, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Search() {
  return (
    <Box sx={{ flexBasis: '50%' }}>
      <Input
        sx={{ width: '100%' }}
        placeholder='Search'
        color='secondary'
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
      />
    </Box>
  );
}

export default Search;
