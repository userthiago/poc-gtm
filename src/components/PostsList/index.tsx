import React, { useState } from 'react';

import ResumedPost from '../ResumedPost';
import Loading from '../Loading';

import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';

import { Container } from './styles';

const PostsList: React.FC = () => {
  const { paginatedPosts } = usePostsContext();
  const { handleGetUser } = useUsersContext();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        paginatedPosts.map(post => {
          return (
            <ResumedPost
              key={post.id}
              postId={post.id}
              userName={handleGetUser(post.userId)?.name || ''}
              title={post.title}
            />
          );
        })
      )}
    </Container>
  );
};

export default PostsList;
