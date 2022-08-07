import React, { useRef, useState } from 'react';


import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Header from './components/Header';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/app.scss';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript1', body: 'Description'},
    {id: 2, title: 'JavaScript2', body: 'Description'},
    {id: 3, title: 'JavaScript3', body: 'Description'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Header/>
      <Container 
        maxWidth="md" 
        sx={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <PostForm create={createPost} posts={posts} />
        {posts.length !== 0 
          ? <PostList remove={removePost} posts={posts} title='Список постов JavaScript'/>
          : <Typography variant="h3" component="div" align='center'>
              Посты не найдены
            </Typography>}
      </Container>
    </div>
  );
}

export default App;
