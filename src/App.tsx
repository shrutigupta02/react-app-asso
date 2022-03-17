import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/compotest';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          lets go baby
        </p>
        <Test />
      </header>
    </div>
  );
}

export default App;
