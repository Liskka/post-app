import React, { useState } from 'react'

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PostForm = ({ create, posts, setVisibleModal }) => {

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: posts[posts.length - 1]?.id + 1 || 1
    }
    create(newPost);

    setPost({ title: '', body: '' });
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
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />
        <TextField
          id="standard-basic"
          label="Описание поста"
          variant="standard"
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
        />
        <Button
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