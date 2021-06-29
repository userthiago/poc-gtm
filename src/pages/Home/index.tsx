import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import ResumedPost from '../../components/ResumedPost';
import { PostData } from '../../context/PostsContext';
import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';

import { HomeContainer } from './styles';
import { UserData } from '../../context/UsersContext';
import Loading from '../../components/Loading';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { posts, handleRegisterPosts } = usePostsContext();
  const { handleGetUser, handleRegisterUsers } = useUsersContext();

  async function getData() {
    setLoading(true);
    await axios
      .get<Array<PostData>>('https://jsonplaceholder.typicode.com/posts')
      .then(async postsRes => {
        handleRegisterPosts(postsRes.data);
        await axios
          .get<Array<UserData>>('https://jsonplaceholder.typicode.com/Users')
          .then(usersRes => handleRegisterUsers(usersRes.data));
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeContainer>
      <Header />
      <main className="home-container__holder">
        {loading ? (
          <Loading />
        ) : (
          posts.map(post => {
            return (
              <ResumedPost
                key={post.id}
                userName={handleGetUser(post.userId)?.name || ''}
                title={post.title}
              />
            );
          })
        )}
      </main>
    </HomeContainer>
  );
};

export default Home;
