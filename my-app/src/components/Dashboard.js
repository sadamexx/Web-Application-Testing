import React from 'react';
import 


export const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="addBall">
                <button onClick={() => setBallScore(addFoul(foulScore))}>Balls</button>                
            </div>
            <div className="addStrike">
                <button>Strike</button>                
            </div>    
            <div className="addFoul">
                <button>Foul</button>                
            </div>    
            <div className="addHit">
                <button>Hits</button>                
            </div>            
        </div>//ends dashboard
    );
}