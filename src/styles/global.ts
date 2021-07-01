import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-background: #55189a;
    --secondary-background: #ffffff;
    --post-background: #f5f0f7;
    --purple-super-light: #e0aaff;
    --purple-light: #9d4edd;
    --purple: #822ce4;
    --purple-dark: #5a189a;
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
