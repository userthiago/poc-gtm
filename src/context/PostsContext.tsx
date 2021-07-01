import axios from 'axios';
import React, { createContext, useState, useCallback, useEffect } from 'react';

export interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsContextData {
  posts: Array<PostData>;
  isPostLoading: boolean;
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
  const [isPostLoading, setPostLoading] = useState(false);
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

  useEffect(() => {
    const loadData = async () => {
      setPostLoading(true);
      const postsFromApi = await axios
        .get<Array<PostData>>('https://jsonplaceholder.typicode.com/posts')
        .then(postsRes => postsRes.data);

      setPosts(postsFromApi);
      setPostLoading(false);
    };

    loadData();
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        isPostLoading,
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
