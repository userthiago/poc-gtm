import React from 'react';

import { Container } from './styles';
import GTMLogo from '../../assets/img/gtm_logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Google Tag Manager - POC</h1>
      <img src={GTMLogo} alt="Google Tag Manager Logotipo" />
    </Container>
  );
};

export default Header;
