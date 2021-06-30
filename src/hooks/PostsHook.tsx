import { useContext } from 'react';
import { PostsContext, PostsContextData } from '../context/PostsContext';

export function usePostsContext(): PostsContextData {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error(
      'usePostsContext must be used within a PostsContextProvider.',
    );
  }

  const { posts, handleGetPost, handleRegisterPosts } = context;

  return {
    posts,
    handleGetPost,
    handleRegisterPosts,
  };
}
