import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//React.StrictMode 严格模式，不会产生新的 dom容器;
//React.StrictMode 在开发模式下 ，会渲染两次；
//在生产模式不会触发多次调用，开发模式下 可以更好督促程序员使用更好的代码，或者不应该使用有副作用的代码

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); */

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
