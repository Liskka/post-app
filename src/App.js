import React, { useState } from 'react';


import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


import Header from './components/Header';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import ModalCreatePost from './components/ModalCreatePost';


import './styles/app.scss';
import { usePosts } from './hooks/usePosts';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: '2JavaScript', body: '3Description'},
    {id: 2, title: '1JavaScript', body: '1Description'},
    {id: 3, title: '3JavaScript', body: '2Description'},
  ]);

  const [filter, setFilter] = useState( {sort: '', query: ''} );
  const [visibleModal, setVisibleModal] = React.useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);  
  
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
        <Button
          variant="outlined"
          sx={{ margin: '10px 0', maxWidth: 200 }}
          onClick={() => setVisibleModal(true)}
        >
          Добавить пост
        </Button>

        <ModalCreatePost visibleModal={visibleModal} setVisibleModal={setVisibleModal} >
          <PostForm create={createPost} posts={posts} setVisibleModal={setVisibleModal} />
        </ModalCreatePost>

        <PostFilter 
          filter={filter} 
          setFilter={setFilter} 
        />

        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JavaScript'/>

      </Container>
    </div>
  );
}

export default App;
