// https://coolors.co/app/1a535c-4ecdc4-f7fff7-ff6b6b-ffe66d
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-color: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    background-color: #f2f2f2;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
