//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [score,setScore]=useState(76);
  const [wicket,setWicket]=useState(50);
  const [ball,setBall]=useState(2);
  const handleScore=(value)=>{
    //condition
    setScore(score+value)
   }
    const handleWicket=(value)=>{
    //condition
    setWicket(wicket+value)
  }
  const handleball=(value)=>{
    //condition
    setBall(ball+value)
  }
  return (
    <div className="App">
    <h3>India:</h3>
    <div className="banner">
      <div>
        Score:{score}
        <h1 className="scoreCount">Add Score</h1>
          <div>
           <button onClick={()=>{handleScore(1)}}>Add 1</button>
           <button onClick={()=>{handleScore(1)}}>Add 4</button>
           <button onClick={()=>{handleScore(1)}}>Add 6</button> 
            </div>
       
      </div>
      <div>
        Wicket:{wicket}
        <h1 className="wicketCount"> </h1>
           <button onClick={()=>{handleWicket(1)}}>Add 1</button>
            
      </div>
      <div>
        Over:
        
        <h1 className="overCount"> </h1>
          <button onClick={()=>{handleball(1)}}>Add 1</button>
      
      </div>
    </div>
<h1>{score>100?"India Won":""}</h1>
   
  </div>
  );
}

export default App;
