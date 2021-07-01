/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes } from 'react';
import { FaAngleRight } from 'react-icons/fa';

import { ResumedPostContainer } from './styles';

interface ResumedPostProps extends HTMLAttributes<HTMLLIElement> {
  userName: string;
  title: string;
}

const ResumedPost: React.FC<ResumedPostProps> = ({
  userName,
  title,
  ...rest
}) => {
  return (
    <ResumedPostContainer {...rest}>
      <div className="resumedPostContainer__content">
        <span>{userName[0]}</span>
        <h2>{title}</h2>
      </div>
      <FaAngleRight />
    </ResumedPostContainer>
  );
};

export default ResumedPost;
