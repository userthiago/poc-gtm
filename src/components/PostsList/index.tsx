import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ResumedPost from '../ResumedPost';
import Loading from '../Loading';

import { PostData } from '../../context/PostsContext';
import { UserData } from '../../context/UsersContext';
import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';

import { Container } from './styles';

const PostsList: React.FC = () => {
  const { paginatedPosts, handleRegisterPosts } = usePostsContext();
  const { handleGetUser, handleRegisterUsers } = useUsersContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const postsFromApi = await axios
        .get<Array<PostData>>('https://jsonplaceholder.typicode.com/posts')
        .then(postsRes => postsRes.data);

      const usersFromApi = await axios
        .get<Array<UserData>>('https://jsonplaceholder.typicode.com/users')
        .then(usersRes => usersRes.data);

      handleRegisterPosts(postsFromApi);
      handleRegisterUsers(usersFromApi);
      setLoading(false);
    };

    loadData();
  }, [handleRegisterPosts, handleRegisterUsers]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        paginatedPosts.map(post => {
          return (
            <ResumedPost
              key={post.id}
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
