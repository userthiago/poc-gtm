import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

import axios from 'axios';
import Header from '../../components/Header';
import Main from '../../components/Main';

import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';

import { PostData } from '../../context/PostsContext';
import { UserData } from '../../context/UsersContext';

import {
  Container,
  Navigation,
  PostContainer,
  CommentsContainer,
} from './styles';
import Loading from '../../components/Loading';

interface ParamsData {
  postId: string;
}

interface CommentsData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Post: React.FC = () => {
  const { handleGetPost } = usePostsContext();
  const { handleGetUser } = useUsersContext();
  const { postId } = useParams<ParamsData>();
  const [postActive, setPostActive] = useState<PostData>();
  const [userActive, setUserActive] = useState<UserData>();
  const [comments, setComments] = useState<Array<CommentsData>>();
  const [loading, setLoading] = useState(false);
  const maxViewComments = 2;

  useEffect(() => {
    setLoading(true);
    const loadComments = async () => {
      const commentList = await axios
        .get<Array<CommentsData>>(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        )
        .then(res => res.data);

      setComments(commentList);
      setLoading(false);
    };

    const post = handleGetPost(Number.parseInt(postId, 10));
    if (post) {
      setPostActive(post);
      setUserActive(handleGetUser(post.userId));
      loadComments();
    }
  }, [handleGetPost, handleGetUser, postId]);

  const getName = useCallback((name: string) => {
    return name.split('@')[0].split('_')[0];
  }, []);

  const getEmail = useCallback((email: string) => {
    return email.length <= 20 ? email : `${email.slice(0, 20)}...`;
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navigation>
              <Link to="/">Home</Link>
              <FaAngleRight />
              <span>
                {postActive ? postActive.title : 'post não encontrado.'}
              </span>
            </Navigation>
            <PostContainer>
              <div className="post-information">
                <h1>{postActive?.title}</h1>
                <div className="user-information">
                  <div className="user-information__name">
                    {userActive?.name}
                  </div>
                  <span className="user-information__username">
                    {`(${userActive?.username})`}
                  </span>
                </div>
              </div>
              <div className="post-body">
                <p>{postActive?.body}</p>
              </div>
            </PostContainer>
            <CommentsContainer>
              <h2>Comments</h2>
              <ul>
                {comments?.slice(0, maxViewComments).map(comment => (
                  <li key={comment.id}>
                    <div className="post__user">
                      <div className="user__avatar">
                        {getName(comment.email)[0]}
                      </div>
                      <div className="user__holder">
                        <div className="user__name">
                          {getName(comment.email)}
                        </div>
                        <div className="user__email">{comment.email}</div>
                      </div>
                    </div>
                    <div className="comment__content">
                      <h2>{comment.name}</h2>
                      <p>{comment.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {comments && comments.length > maxViewComments ? (
                <button type="button">Show all comments</button>
              ) : null}
            </CommentsContainer>
          </>
        )}
      </Main>
    </Container>
  );
};

export default Post;
