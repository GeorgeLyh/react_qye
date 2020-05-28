import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ClickComponent as ComponentDemo } from './components'

//快速创建  快捷键 1、 rfc  创建 function的 class; 2、 rcc  创建clss的 ract类
//react提供的Fragment  是一个空标签，用来当作容器使用，和vue里面的template标签一样
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-info'>
        <ComponentDemo></ComponentDemo>
      </div>
    </div>
  );
}

export default App;
