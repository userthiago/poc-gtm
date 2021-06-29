import React, { createContext, useState } from 'react';

export interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsContextData {
  posts: Array<PostData>;
  handleGetPost: (postId: number) => PostData | undefined;
  handleRegisterPosts: (postList: Array<PostData>) => void;
}

export const PostsContext = createContext({} as PostsContextData);

export const PostsContextProvider: React.FC = ({ children, ...props }) => {
  const [posts, setPosts] = useState<Array<PostData>>([]);

  function handleRegisterPosts(postList: Array<PostData>) {
    setPosts(postList);
  }

  function handleGetPost(postId: number) {
    return posts.find(post => post.id === postId);
  }

  return (
    <PostsContext.Provider
      value={{ posts, handleGetPost, handleRegisterPosts }}
      {...props}
    >
      {children}
    </PostsContext.Provider>
  );
};
