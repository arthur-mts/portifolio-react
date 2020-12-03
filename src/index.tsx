import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/globalStyle";
import Frontpage from "./pages/Frontpage";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Frontpage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
