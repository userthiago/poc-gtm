/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

import { ResumedPostContainer } from './styles';

interface ResumedPostProps extends HTMLAttributes<HTMLLIElement> {
  postId: number;
  userName: string;
  title: string;
}

const ResumedPost: React.FC<ResumedPostProps> = ({
  postId,
  userName,
  title,
  ...rest
}) => {
  return (
    <ResumedPostContainer {...rest}>
      <Link to={`/post/${postId}`}>
        <div className="resumedPostContainer__content">
          <span>{userName[0]}</span>
          <h2>{title}</h2>
        </div>
        <FaAngleRight />
      </Link>
    </ResumedPostContainer>
  );
};

export default ResumedPost;
