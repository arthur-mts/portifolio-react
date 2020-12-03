import { createGlobalStyle } from "styled-components";
import bgPng from "../assets/bg.png";

export default createGlobalStyle`


  body {
    margin: 0;
    
    font-family: 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;

  background-image: url(${bgPng});
  background-size: cover;
  background-position: top;
  background-attachment: fixed;

  * {
    box-sizing: border-box;
  }
  }
`;
