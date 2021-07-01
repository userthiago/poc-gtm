import React from 'react';

import Header from '../../components/Header';

import { HomeContainer } from './styles';
import Main from '../../components/Main';
import PostsList from '../../components/PostsList';
import Pagination from '../../components/Pagination';
import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';
import Loading from '../../components/Loading';

const HomePage: React.FC = () => {
  const { isPostLoading } = usePostsContext();
  const { isUserLoading } = useUsersContext();

  return (
    <HomeContainer>
      <Header />
      <Main>
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
