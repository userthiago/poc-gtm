import { useContext } from 'react';
import { PostsContext, PostsContextData } from '../context/PostsContext';

export function usePostsContext(): PostsContextData {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error(
      'usePostsContext must be used within a PostsContextProvider.',
    );
  }

  const {
    posts,
    postsPerPage,
    currentPage,
    handleGetPost,
    handleRegisterPosts,
    paginatedPosts,
    handleChangePage,
  } = context;

  return {
    posts,
    postsPerPage,
    currentPage,
    handleGetPost,
    handleRegisterPosts,
    paginatedPosts,
    handleChangePage,
  };
}
