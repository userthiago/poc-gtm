import React, { HTMLAttributes } from 'react';
import { Container } from './styles';

type MainProps = HTMLAttributes<HTMLDivElement>;

const Main: React.FC<MainProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Main;
