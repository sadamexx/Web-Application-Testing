import React, { useState } from 'react';


export const Display=() => {
    const [ballScore, setBallScore] = useState(0);
    const [strikeScore, setStrikeScore] = useState(0);
    const [foulScore, setFoulScore] = useState(0);
    const [hitScore, setHitScore] = useState(0);

    return(
    <div className="container">
        <div className="ball">
            <h2>Balls</h2>
            <div className="ballScore">
                {ballScore}
            </div>
        </div>

      <div className="strike">
        <h2>Strikes</h2>
        <div className="strikeScore">
          {strikeScore}
        </div>
      </div>

      <div className="foul">
        <h2>Fouls</h2>
        <div className="foulScore">
          {foulScore}
        </div>
      </div>

      <div className="hit">
        <h2>Hits</h2>
        <div className="hitScore">
          {hitScore}
        </div>
      </div>
    </div>
    );
};