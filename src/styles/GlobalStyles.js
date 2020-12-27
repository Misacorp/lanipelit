import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: auto;
    min-height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.base.fontFamily};
    background-image: linear-gradient(to bottom, #1A0A00, #0A0100);
    background-size: cover;
    background-repeat: no-repeat;
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.typography.title.fontFamily};
  }
`;

export default GlobalStyles;
