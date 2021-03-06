import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';
import CommentPage from '../pages/CommentPage';
import { usePageViews } from '../hooks/GoogleAnalytics';

const Routes: React.FC = () => {
  usePageViews();
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/post/:postId/comments" component={CommentPage} />
      <Route path="/post/:postId" component={PostPage} />
    </Switch>
  );
};

export default Routes;
