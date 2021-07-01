import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

import axios from 'axios';
import Header from '../../components/Header';
import Main from '../../components/Main';

import { Container, Navigation, CommentsContainer } from './styles';
import Loading from '../../components/Loading';
import Comment from '../../components/Comment';
import { useUsersContext } from '../../hooks/UsersHook';
import { usePostsContext } from '../../hooks/PostsHook';

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
            <CommentsContainer>
              <h2>All Comments</h2>
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
