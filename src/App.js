import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './Component1'
import companies from './companies'
function App() {

  console.log(companies.data.[2].profile.keywords.[0])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {  
        <p>
          ss
        </p>
              }   
        <Component1/>
      </header>
    </div>
  );
}

export default App;
