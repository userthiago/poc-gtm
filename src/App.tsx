import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import { PostsContextProvider } from './context/PostsContext';
import { UsersContextProvider } from './context/UsersContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PostsContextProvider>
        <UsersContextProvider>
          <Routes />
        </UsersContextProvider>
      </PostsContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
