import React from 'react';
import ResumedPost from '../../components/ResumedPost';
import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';

import { HomeContainer } from './styles';

const Home: React.FC = () => {
  const { posts } = usePostsContext();
  const { handleGetUser } = useUsersContext();

  return (
    <HomeContainer>
      {posts.map(post => {
        return (
          <ResumedPost
            key={post.id}
            userName={handleGetUser(post.userId)?.name || ''}
            title={post.title}
          />
        );
      })}
    </HomeContainer>
  );
};

export default Home;
