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
    isPostLoading,
    postsPerPage,
    currentPage,
    handleGetPost,
    handleRegisterPosts,
    paginatedPosts,
    handleChangePage,
  } = context;

  return {
    posts,
    isPostLoading,
    postsPerPage,
    currentPage,
    handleGetPost,
    handleRegisterPosts,
    paginatedPosts,
    handleChangePage,
  };
}
