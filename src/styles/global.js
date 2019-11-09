import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  body {
    background: #191827 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, div#root {
    height: 100%;
    width: 100%;
  } 

  body, input, button {
    font-size: 14px;
  }
  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px;
  }
  button {
    cursor: pointer;
  }
`; 