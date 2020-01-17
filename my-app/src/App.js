import React, {useState} from 'react';
import {Display} from './components/Display';
import {Dashboard} from './components/Dashboard';
import './App.css';

function App() {
  const [ballScore, setBallScore] = useState(0);
  const [strikeScore, setStrikeScore] = useState(0);
  const [foulScore, setFoulScore] = useState(0);
  const [hitScore, setHitScore] = useState(0);

  const addBall = () =>{
    if( ballScore === 4) {
         setBallScore(0);
    } else if (strikeScore === 3){
        setBallScore(0);
    } else {
     setBallScore(ballScore +1);
    }   
};

const addFoul = () => {
  if(strikeScore <= 1){
      setStrikeScore(strikeScore + 1);
  } else if( strikeScore >= 2) {
      setFoulScore(foulScore + 1);
  } else {
          setFoulScore(foulScore + 1);
      }
  };

  const addHit = () => {
    setStrikeScore (0)
    setBallScore (0)
    setHitScore (hitScore +1)
};  

const addStrike = () => {
  if (strikeScore === 3){
      setStrikeScore(0)
      setBallScore(0)
  } else {
      setStrikeScore(strikeScore +1)
  }
}

const reset = () => {
  setStrikeScore(0)
  setBallScore(0)
  setFoulScore(0)
  setHitScore(0)
}

  return (
    <div className="App">
      
       <h1>Player Stat Board</h1>
       <img width = "200" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS556ck-T-pfO9OiY2gk1cJ06hcILYbljuBuCsRe0kdVafxaWfv&s" alt="baseball player" />
      
      <Display ballScore={ballScore} foulScore={foulScore} strikeScore={strikeScore} hitScore={hitScore}/>
      <Dashboard addHit={addHit} addFoul={addFoul} addBall={addBall} addHit={addHit} addStrike={addStrike} reset={reset}/>
      

    </div>///ends App class
  );
}

export default App;
