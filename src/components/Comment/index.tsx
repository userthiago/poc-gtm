import React, { HTMLAttributes, useCallback } from 'react';

import { CommentContainer } from './styles';

interface CommentData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentProps extends HTMLAttributes<HTMLLIElement> {
  comment: CommentData;
}

const Comment: React.FC<CommentProps> = ({ comment, ...rest }) => {
  const getName = useCallback((name: string) => {
    return name.split('@')[0].split('_')[0];
  }, []);

  return (
    <CommentContainer {...rest}>
      <div className="comment__user">
        <div className="user__avatar">{getName(comment.email)[0]}</div>
        <div className="user__holder">
          <div className="user__name">{getName(comment.email)}</div>
          <div className="user__email">{comment.email}</div>
        </div>
      </div>
      <div className="comment__content">
        <h2>{comment.name}</h2>
        <p>{comment.body}</p>
      </div>
    </CommentContainer>
  );
};

export default Comment;
