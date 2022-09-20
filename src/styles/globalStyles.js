import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-dark: #10162f;
    --color-blue: #3a10e5;
    --color-purple: #6400e4;
    --color-yellow: #ffd500;
    --color-pink: #fff0e5;
    --color-white: #ffffff;
    --color-gray-1: #f5f5f5;
    --color-gray-2: #eeeeee;
    --color-gray-3: #e0e0e0;
    --color-gray-4: #9e9e9e;
    --color-gray-5: #616161;
    --color-gray-6: #424242;
    --fontBase: "Poppins", sans-serif;

    --headline1: bold 45px / 80px var(--fontBase);
    --headline2: bold 30px / 50px var(--fontBase);
    --headline3: 600 20px / 30px var(--fontBase);
    --headline4: 700 12px / 14px var(--fontBase);
    --label: 300 14px / 22px var(--fontBase);
    --body1: 16px / 22px var(--fontBase);
    --button: 600 18px / 26px var(--fontBase);

    --transition: 0.25s all ease;
  }

  @media screen and (min-width: 768px) {
    :root {
      --headline1: bold 50px / 90px var(--fontBase);
      --headline2: bold 35px / 60px var(--fontBase);
      --headline3: 600 25px / 40px var(--fontBase);
    }
  }

  body {
    font: var(--body1);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1 {
    font: var(--headline1);
  }
  
  h2 {
    font: var(--headline2);
  }
  
  h3 {
    font: var(--headline3);
  }
  
  h4 {
    font: var(--headline4);
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
    margin: auto;
  }

  .section {
    background-color: var(--color-white);
    padding-block-start: 36px;
    padding-block-end: 36px;
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .section--secondary {
    background-color: var(--color-pink);
  }

  .highlight {
    color: var(--color-blue);
    position: relative;
  }

  .highlight::after {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: var(--color-yellow);
    bottom: -2px;
    left: 0;
  }
`;

export default GlobalStyle;
