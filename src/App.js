import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-info'>
        <Layout></Layout>
      </div>
    </div>
  );
}

export default App;
