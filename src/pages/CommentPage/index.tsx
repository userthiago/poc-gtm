import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaAngleRight } from 'react-icons/fa';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Loading from '../../components/Loading';
import Comment from '../../components/Comment';
import Navigation from '../../components/Navigation';

import { useUsersContext } from '../../hooks/UsersHook';
import { usePostsContext } from '../../hooks/PostsHook';

import { Container, CommentsContainer } from './styles';

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

const CommentPage: React.FC = () => {
  const { postId } = useParams<ParamsData>();
  const { isUserLoading } = useUsersContext();
  const { isPostLoading } = usePostsContext();
  const [comments, setComments] = useState<Array<CommentsData>>();
  const [loading, setLoading] = useState(false);

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

    loadComments();
  }, [postId]);

  return (
    <Container>
      <Header />
      <Main>
        {loading || isUserLoading || isPostLoading ? (
          <Loading />
        ) : (
          <>
            <Navigation>
              <Link to={`/post/${postId}`}>Post</Link>
              <FaAngleRight />
              <span>Comments</span>
            </Navigation>
            <h2>All Comments</h2>
            <CommentsContainer>
              <ul>
                {comments?.map(comment => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </ul>
            </CommentsContainer>
          </>
        )}
      </Main>
    </Container>
  );
};

export default CommentPage;
