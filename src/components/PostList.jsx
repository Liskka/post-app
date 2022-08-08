import React, { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import PostItem from './PostItem';
import { TransitionGroup } from 'react-transition-group';
import { Collapse } from '@mui/material';

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
      <Typography variant="h3" component="div" align='center'>
        Посты не найдены
      </Typography>
    )
  }

  return (
    <>
      <Typography variant='h3' component='h2'>
        {title}
      </Typography>
      <TransitionGroup>
        {posts.map(postInfo => (
          <Collapse key={postInfo.id} >
            <PostItem
              key={postInfo.id}
              post={postInfo}
              remove={remove}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    </>
  )
}

export default PostList