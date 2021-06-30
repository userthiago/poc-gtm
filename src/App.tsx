import React from 'react';
import { HashRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import { PostsContextProvider } from './context/PostsContext';
import { UsersContextProvider } from './context/UsersContext';

const App: React.FC = () => {
  return (
    <HashRouter>
      <PostsContextProvider>
        <UsersContextProvider>
          <Routes />
        </UsersContextProvider>
      </PostsContextProvider>
      <GlobalStyle />
    </HashRouter>
  );
};

export default App;
