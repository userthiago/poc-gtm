import React from 'react';

import GTMLogo from '../../assets/img/gtm_logo.svg';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <img src={GTMLogo} alt="Google Tag Manager Logotipo" />
      <span>Loading...</span>
    </Container>
  );
};

export default Loading;
