import { useState } from "react";

export function Change(){
    const[count,setCount]=useState(0);
    const[color,setColor]=useState(['Blue','Orange']);
    let increment=()=>{
        setCount((preCount)=>preCount+1)
    }
    let decrement=()=>{
        setCount((preCount)=>preCount-1)
    }
    let reset=()=>{
        setCount(0);
        setColor('')
    }
    return(
        <><center>
        <h1>Count: {count}</h1>
        <h1> Color: {color[0]}</h1>
        <button onClick={increment} className="bg-primary text-light">Increment</button>
        <button onClick={decrement} className="bg-primary text-light">Decrement</button>
        <button onClick={()=>setColor(['Red'])} className="bg-danger text-light">Change</button>
        
        <button type="reset" onClick={reset} className="bg-warning text-light">reset</button>
        </center>
        </>
    )
}

