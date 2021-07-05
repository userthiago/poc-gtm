import React from 'react';
import { HashRouter } from 'react-router-dom';

import { PostsContextProvider } from './context/PostsContext';
import { UsersContextProvider } from './context/UsersContext';
import Routes from './routes';
import { usePageViews } from './hooks/GoogleAnalytics';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  usePageViews();
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
