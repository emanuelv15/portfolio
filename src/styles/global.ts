import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --mainColor: #15023a;
  }

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    overflow-x: hidden;

    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
