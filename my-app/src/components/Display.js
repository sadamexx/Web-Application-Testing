import React, { useState } from 'react';


export const Display=(props) => {
   
    return(
    <div className="container">
        <div className="ball">
            <h2>Balls</h2>
            <div className="ballScore">
                {props.ballScore}
            </div>
        </div>

      <div className="strike">
        <h2>Strikes</h2>
        <div className="strikeScore">
          {props.strikeScore}
        </div>
      </div>

      <div className="foul">
        <h2>Fouls</h2>
        <div className="foulScore">
          {props.foulScore}
        </div>
      </div>

      <div className="hit">
        <h2>Hits</h2>
        <div className="hitScore">
          {props.hitScore}
        </div>
      </div>
    </div>
    );
};