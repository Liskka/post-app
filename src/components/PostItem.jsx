import React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const PostItem = ({ post, remove }) => {

  const { id, title, body } = post;


  return (
    <Paper
      elevation={3}
      component='div'
      sx={{ padding: '10px', margin: '5px 0' }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <div className="post__content">
          <strong>{`${id}. ${title}`}</strong>
          <div>
            {body}
          </div>
        </div>

        <IconButton
          aria-label="delete"
          onClick={() => remove(post)}
        >
          <DeleteIcon color='primary' />
        </IconButton>

      </Stack>
    </Paper>
  )
}

export default PostItem;