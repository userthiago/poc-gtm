import React, { createContext, useState, useCallback } from 'react';

export interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsContextData {
  posts: Array<PostData>;
  paginatedPosts: Array<PostData>;
  postsPerPage: number;
  currentPage: number;
  handleGetPost: (postId: number) => PostData | undefined;
  handleRegisterPosts: (postList: Array<PostData>) => void;
  handleChangePage: (pageNumber: number) => void;
}

export const PostsContext = createContext({} as PostsContextData);

export const PostsContextProvider: React.FC = ({ children, ...props }) => {
  const [posts, setPosts] = useState<Array<PostData>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const paginatedPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleRegisterPosts = useCallback((postList: Array<PostData>) => {
    setPosts(postList);
  }, []);

  function handleGetPost(postId: number) {
    return posts.find(post => post.id === postId);
  }

  function handleChangePage(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        postsPerPage,
        currentPage,
        handleGetPost,
        handleRegisterPosts,
        paginatedPosts,
        handleChangePage,
      }}
      {...props}
    >
      {children}
    </PostsContext.Provider>
  );
};
