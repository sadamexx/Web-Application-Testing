import React from 'react';


export const Dashboard = (props) => {
    
    return (
        <div style={{border: "black"}}>
            <div className="addBall">
                <button onClick={props.addBall}>Ball</button>                
            </div>

            <div className="addStrike">
                <button onClick= {props.addStrike}>Strike</button>                
            </div>  

            <div className="addFoul">
                <button onClick={props.addFoul}>Foul</button>                
            </div> 

            <div className="addHit">
                <button onClick={props.addHit}>Hit</button>                
            </div>  
            
            <div>
                <button onClick={props.reset}>Clear Board</button>
            </div>          
        </div>//ends dashboard
    );
}