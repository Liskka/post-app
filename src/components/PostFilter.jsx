import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import MySelect from './MySelect';

const PostFilter = ({ filter, setFilter }) => {

  const [text, setText] = useState('');

  const debounced = useDebouncedCallback((value) => {
    setFilter(value);
  }, 500
  );

  return (
    <>
      <TextField
        sx={{ maxWidth: 250 }}
        id="standard-basic"
        variant="standard"
        label="Поиск..."
        value={text}
        onChange={e => {
          setText(e.target.value);
          debounced({ ...filter, query: e.target.value })
        }}
      />

      <Divider style={{ marginTop: '10px' }} />

      <MySelect
        value={filter.sort}
        sortPosts={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }
        ]}
      />
    </>
  )
}

export default PostFilter