import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import ModalCreatePost from '../components/ModalCreatePost';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';

import PostService from '../API/PostService';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
// import { useObserver } from '../hooks/useObserver';





function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visibleModal, setVisibleModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  // const lastElement = useRef();

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    // console.log(response.headers['x-total-count']);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });



  // useObserver(lastElement, page < totalPages, isLoading, () => {
  //   setPage(page + 1);
  // });


  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && page < totalPages) setPage(page + 1);

  }, [inView])

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
    <>
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
            Произошла ошибка: <br />{postError}
          </Typography>}

        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JavaScript' />
        <div ref={ref}></div>
        {/* <div ref={lastElement}></div> */}
        {isLoading &&
          <Loader isLoading={isLoading} />}

        <Paginate totalPages={totalPages} setPage={setPage} />
      </Container>
    </>
  );
}

export default Posts;
