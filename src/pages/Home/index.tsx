import React from 'react';

import Header from '../../components/Header';

import { HomeContainer } from './styles';
import Main from '../../components/Main';
import PostsList from '../../components/PostsList';
import Pagination from '../../components/Pagination';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <Main>
        <PostsList />
        <Pagination />
      </Main>
    </HomeContainer>
  );
};

export default Home;
