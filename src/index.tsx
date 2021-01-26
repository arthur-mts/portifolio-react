import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/globalStyle";
import Frontpage from "./pages/Frontpage";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <title>{process.env.REACT_APP_PAGE_TITLE}</title>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Frontpage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
