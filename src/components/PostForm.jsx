import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useValidate } from '../hooks/useTextInputValidation';

const PostForm = ({ create, posts, setVisibleModal }) => {

  // const [post, setPost] = useState({ title: '', body: '' });
  const title = useValidate(5);
  const body = useValidate(10);

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      title: title.text,
      body: body.text,
      id: posts[posts.length - 1]?.id + 1 || 1
    }
    create(newPost);

    // setPost({ title: '', body: '' });
    setVisibleModal(false);
  }


  return (
    <form>
      <Stack
        direction="column"
        justifyContent="space-between"
      >
        <TextField
          id="standard-basic"
          label="Название поста"
          variant="standard"
          required
          value={title.text}
          onChange={e => title.setText(e.target.value)}
          error={title.isError}
          helperText={title.errorMessage}
        />

        <TextField
          id="standard-basic"
          label="Описание поста"
          variant="standard"
          required
          value={body.text}
          onChange={e => body.setText(e.target.value)}
          error={body.isError}
          helperText={body.errorMessage}
        />
        <Button
          disabled={title.isError || body.isError}
          variant="outlined"
          sx={{ margin: '10px 0', maxWidth: 200 }}
          onClick={(e) => addNewPost(e)}
        >
          Создать пост
        </Button>
      </Stack>
    </form>
  )
}

export default PostForm;