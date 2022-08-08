import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MySelect = ({ options, defaultValue, value, sortPosts }) => {


  return (
    <FormControl variant="standard" sx={{ m: 1, maxWidth: 180 }}>
      <InputLabel id="demo-simple-select-standard-label">{defaultValue}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={event => sortPosts(event.target.value)}
      // label={defaultValue}
      >
        <MenuItem value="">
          <em style={{ color: 'gray' }}>По дате</em>
        </MenuItem>

        {options.map(option =>
          <MenuItem key={option.name} value={option.value}>{option.name}</MenuItem>
        )}

      </Select>
    </FormControl>
  )
}

export default MySelect