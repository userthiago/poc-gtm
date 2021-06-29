import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-background: #55189a;
    --secondary-background: #ffffff;
    --post-background: #f5f0f7;
    --purple-light: #9f69dd;
    --purple: #822ce4;
    --purple-dark: #5e2c98;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--primary-background);

    font-family: 'Roboto', sans-serif;
  }
`;
