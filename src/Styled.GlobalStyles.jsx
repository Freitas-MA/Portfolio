import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Modal on full-screen */
  #modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 5vh;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export default GlobalStyle;
