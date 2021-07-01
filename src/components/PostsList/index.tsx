import React from 'react';

import ResumedPost from '../ResumedPost';

import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';

import { Container } from './styles';

const PostsList: React.FC = () => {
  const { paginatedPosts } = usePostsContext();
  const { handleGetUser } = useUsersContext();

  return (
    <Container>
      {paginatedPosts.map(post => {
        return (
          <ResumedPost
            key={post.id}
            postId={post.id}
            userName={handleGetUser(post.userId)?.name || ''}
            title={post.title}
          />
        );
      })}
    </Container>
  );
};

export default PostsList;
