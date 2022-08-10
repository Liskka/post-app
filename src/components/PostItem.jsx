import React from 'react';
import { useHistory } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PostItem = ({ post, remove }) => {

  const { id, title, body } = post;
  const router = useHistory();


  return (
    <Paper
      elevation={4}
      component='div'
      sx={{ padding: '10px', margin: '5px 0' }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <div className="post__content">
          <strong>{`${id}. ${title}`}</strong>
          <div>
            {body}
          </div>
        </div>

        <Box>
          <Button
            variant="text"
            onClick={() => router.push(`/posts/${id}`)}
          >
            Открыть
          </Button>
        </Box>

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