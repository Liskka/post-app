import React from 'react';

import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import MySelect from './MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <TextField
        sx={{ maxWidth: 250 }}
        id="standard-basic"
        variant="standard"
        label="Поиск..."
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
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