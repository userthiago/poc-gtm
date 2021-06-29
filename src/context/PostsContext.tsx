import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsContextData {
  posts: Array<PostData>;
  handleGetPost: (postId: number) => PostData | undefined;
}

export const PostsContext = createContext({} as PostsContextData);

export const PostsContextProvider: React.FC = ({ children, ...props }) => {
  const [posts, setPosts] = useState<Array<PostData>>([]);

  useEffect(() => {
    axios
      .get<Array<PostData>>('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data));
  }, []);

  function handleGetPost(postId: number) {
    return posts.find(post => post.id === postId);
  }

  return (
    <PostsContext.Provider value={{ posts, handleGetPost }} {...props}>
      {children}
    </PostsContext.Provider>
  );
};
