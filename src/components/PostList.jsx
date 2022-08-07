import React from 'react';

import Typography from '@mui/material/Typography';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  return (
    <>
      <Typography variant='h3' component='h2'>
        {title}
      </Typography>
      {posts.map(postInfo => (
        <PostItem
          key={postInfo.id}
          post={postInfo}
          remove={remove}
        />
      ))}
    </>
  )
}

export default PostList