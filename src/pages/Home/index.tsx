import React from 'react';
import Header from '../../components/Header';
import ResumedPost from '../../components/ResumedPost';
import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';

import { HomeContainer } from './styles';

const Home: React.FC = () => {
  const { posts } = usePostsContext();
  const { handleGetUser } = useUsersContext();

  return (
    <HomeContainer>
      <Header />
      <main className="home-container__holder">
        {posts.map(post => {
          return (
            <ResumedPost
              key={post.id}
              userName={handleGetUser(post.userId)?.name || ''}
              title={post.title}
            />
          );
        })}
      </main>
    </HomeContainer>
  );
};

export default Home;
