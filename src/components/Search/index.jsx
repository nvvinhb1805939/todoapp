import SearchIcon from '@mui/icons-material/Search';
import { Input, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
  onSearch: PropTypes.func,
};
Search.defaultProps = {
  onSearch: null,
};

function Search({ onSearch }) {
  const handleOnSearchChange = value => {
    if (!onSearch) return;
    onSearch(value);
  };

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
        onChange={event => {
          handleOnSearchChange(event.target.value);
        }}
      />
    </Box>
  );
}

export default Search;
