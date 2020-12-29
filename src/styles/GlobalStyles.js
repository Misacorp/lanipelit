import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  html {
    height: auto;
    min-height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.base.fontFamily};
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.typography.title.fontFamily};
  }
`;

export default GlobalStyles;
