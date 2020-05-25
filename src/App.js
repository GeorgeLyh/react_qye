import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ChildComponent as ComponentDemo } from './components'
//快速创建  快捷键 1、 rfc  创建 function的 class; 2、 rcc  创建clss的 ract类

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
