import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/Loader';

import Container from '@mui/system/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const PostPage = () => {

  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [comments, setComments] = useState([])
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id)
  }, []);


  return (
    <Container maxWidth="lg" sx={{ pt: '40px', pb: '40px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

      {isLoading
        ? <Loader isLoading={isLoading} />
        : <Paper
          elevation={8}
          component='div'
          sx={{ padding: '10px', margin: '5px 0' }}
        >
          <Stack
            direction="column"
            justifyContent="space-between"
            // alignItems="center"
            spacing={2}
          >
            <Typography variant='h5' component='h3'>
              Post {post.id}. {post.title} <br />
            </Typography>
            <Typography variant='body1' component='div'>
              {post.body}
            </Typography>
          </Stack>
        </Paper>}
      {isComLoading
        ? <Loader isLoading={isLoading} />
        : <Container maxWidth="md">
          <Stack
            direction="column"
            justifyContent="space-between"
            // alignItems="center"
            spacing={2}
            sx={{ mt: '50px' }}
          >
            {comments.map((com) => {
              return <Paper
                key={com.id}
                elevation={4}
                sx={{ p: '10px' }}
              >
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Typography variant='subtitle1' component='div'>
                    {com.email}
                  </Typography>
                  <Typography variant='body2' component='div'>
                    {com.body}
                  </Typography>
                </Stack>
              </Paper>
            })}
          </Stack>
        </Container>
      }


    </Container >
  )
}

export default PostPage;