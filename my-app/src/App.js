import React, {useState} from 'react';
import {Display} from './components/Display';
import {Dashboard} from './components/Dashboard';
import './App.css';

function App() {
  
  return (
    <div className="App">
      
       <h1>Player Stat Board</h1>
       <img width = "200" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS556ck-T-pfO9OiY2gk1cJ06hcILYbljuBuCsRe0kdVafxaWfv&s" alt="baseball player" />
      
      <Display />
      <Dashboard />
      

    </div>///ends App class
  );
}

export default App;
