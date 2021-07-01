import React from 'react';

import GTMLogo from '../../assets/img/gtm_logo.svg';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Google Tag Manager - POC</h1>
      <img src={GTMLogo} alt="Google Tag Manager Logotipo" />
    </Container>
  );
};

export default Header;
