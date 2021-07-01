import React, { HTMLAttributes } from 'react';

import { NavContainer } from './styles';

type NavigationProps = HTMLAttributes<HTMLDivElement>;

const Navigation: React.FC<NavigationProps> = ({ children, ...rest }) => {
  return <NavContainer {...rest}>{children}</NavContainer>;
};

export default Navigation;
