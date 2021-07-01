import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaAngleRight } from 'react-icons/fa';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Loading from '../../components/Loading';
import Comment from '../../components/Comment';
import Navigation from '../../components/Navigation';

import { usePostsContext } from '../../hooks/PostsHook';
import { useUsersContext } from '../../hooks/UsersHook';

import { PostData } from '../../context/PostsContext';
import { UserData } from '../../context/UsersContext';

import { Container, PostContainer, CommentsContainer } from './styles';

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

const PostPage: React.FC = () => {
  const location = useLocation();
  const { handleGetPost, isPostLoading } = usePostsContext();
  const { handleGetUser, isUserLoading } = useUsersContext();
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

  return (
    <Container>
      <Header />
      <Main>
        {loading || isPostLoading || isUserLoading ? (
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
            <h2>
              Post of
              {` ${userActive?.name}`}
            </h2>
            <PostContainer>
              <div className="post-information">
                <h1>{postActive?.title}</h1>
                <div className="user-information">
                  <div className="user-information__name">
                    {userActive?.name}
                  </div>
                  <span className="user-information__username">
                    {`(${userActive?.email})`}
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
                  <Comment key={comment.id} comment={comment} />
                ))}
              </ul>
              {comments && comments.length > maxViewComments ? (
                <Link
                  id="show-more-comments"
                  to={`${location.pathname}/comments`}
                >
                  Show all comments
                </Link>
              ) : null}
            </CommentsContainer>
          </>
        )}
      </Main>
    </Container>
  );
};

export default PostPage;
