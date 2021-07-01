import React from 'react';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Main from '../../components/Main';
import PostsList from '../../components/PostsList';
import Pagination from '../../components/Pagination';

import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';

import { HomeContainer } from './styles';

const HomePage: React.FC = () => {
  const { isPostLoading } = usePostsContext();
  const { isUserLoading } = useUsersContext();

  return (
    <HomeContainer>
      <Header />
      <Main>
        <h2>Posts</h2>
        {isPostLoading || isUserLoading ? (
          <Loading />
        ) : (
          <>
            <PostsList />
            <Pagination />
          </>
        )}
      </Main>
    </HomeContainer>
  );
};

export default HomePage;
