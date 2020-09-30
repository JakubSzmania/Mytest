import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './Component1'
import companies from './companies'
function App() {

  console.log(companies.data.[2].profile.keywords.[0])

  var dni_tygodnia = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"]

  return dni_tygodnia.map(function(x){
    return <h3> {x} </h3>
  })
    

}

export default App;
