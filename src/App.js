import React, { createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// import { ComponentDemo } from "./components";
import { ComponentBox } from "./components";

let userInfo = {
  name: "admin",
  department: "情报局",
};
export const { Consumer } = createContext(userInfo);
//如果 context使用了 默认值的话，就不需要 Provider
// export const { Provider, Consumer } = createContext(userInfo);

//快速创建  快捷键 1、 rfc  创建 function的 class; 2、 rcc  创建clss的 ract类
//react提供的Fragment  是一个空标签，用来当作容器使用，和vue里面的template标签一样
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-info">
        <ComponentBox></ComponentBox>
      </div>
    </div>
  );
}

export default App;
