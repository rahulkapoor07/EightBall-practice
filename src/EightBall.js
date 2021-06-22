import React, { useState } from "react";
import {messageColor, randomPick} from "./messageColor";
import "./EightBall.css";

const EightBall =()=>{
    const [count, setCount] = useState(()=>({msg : "Think of a question", color : "black"}));
    const [counter, setCounter] = useState(()=> 0);
    const reset = ()=>{
        setCounter(0);
        setCount({msg : "Think of a question", color : "black"});
    }
    const changeText = ()=>{
        setCounter (counter + 1);
        setCount(randomPick(messageColor));
    }
    
    return (
        <div className = "EightBall">
            <div className="EightBall-circle" style = {{backgroundColor:count.color}} onClick = {changeText}>
                {count.msg}
            </div>
            <p>Counter #: {counter}</p>
            <button className="EightBall-reset" onClick = {reset}>RESET</button>
        </div>
    )
}

export default EightBall; 