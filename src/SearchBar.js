import React from 'react';
import { Input } from '@mui/material';

const SearchBar = (props) => {

  return (
            <Input
              placeholder="Find a movie"
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={props.onKeyUp}
            />
  );
}
export default SearchBar