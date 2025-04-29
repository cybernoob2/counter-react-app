import React, {useState} from "react";
function Counter(){

    const [count, update]= useState(0);
    const increase = ()=>{
      update(count + 1);
    }
  
    const decrease = () =>{
      update(count - 1);
    }
    return(
      <div className="container">
        <h1>COUNTER APP😁</h1>
        <p>Count is : {count}</p>
        <button className="btn" onClick={increase}>Increment</button>
        <button className="btn2" onClick={decrease}>Decrement</button>
      </div>
    );
}

export default Counter;