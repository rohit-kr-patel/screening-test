import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

// Component for the search bar
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Handle search button click
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box display="flex" justifyContent="center" my={4}>
      <TextField
        label="Search"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ marginRight: '1rem' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
