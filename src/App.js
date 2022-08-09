import React, { useEffect, useState } from 'react';


import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Header from './components/Header';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import ModalCreatePost from './components/ModalCreatePost';
import Loader from './components/Loader';
import Paginate from './components/Paginate';

import PostService from './API/PostService';
import { usePosts } from './hooks/usePosts';
import {useFetching} from './hooks/useFetching';
import { getPageCount } from './utils/pages';

import './styles/app.scss';



function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState( {sort: '', query: ''} );
  const [visibleModal, setVisibleModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);  

  const [fetchPosts, isLoading, postError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    // console.log(response.headers['x-total-count']);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // console.log(totalPages);
  console.log('page = ', page);

  useEffect(() => {
    fetchPosts();
  }, [page]);
  
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
          marginBottom: '50px',
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

        {postError &&
          <Typography variant="h3" component="h4" align='center'>
            Произошла ошибка: <br/>{postError}
          </Typography>}

        {isLoading
          ? <Loader isLoading={isLoading} />
          : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JavaScript'/>}
        
        <Paginate totalPages={totalPages} setPage={setPage} />
      </Container>
    </div>
  );
}

export default App;
