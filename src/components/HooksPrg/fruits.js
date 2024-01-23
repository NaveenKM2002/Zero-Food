import { useState } from "react";

export function Change1(){
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);
    const[color,setColor]=useState(['Blue','Orange']);
    let increment=()=>{
        setCount((preCount)=>preCount+1)
    }
    let decrement=()=>{
        setCount1((preCount)=>preCount+1)
    }
    let reset=()=>{
        setCount(0);
        setColor('')
    }
    const bg1={
        // width:'100%',
        // height:'100vh',
        border:'100px solid orange'
    }
    return(
        <><center>
        <div className="container-fluid" style={bg1}>
            <div className="container-fluid">
                <h1 className="mt-2">Bob ate <span className="text-warning"> {count}</span> mangoes <span className="text-warning"> {count1}</span> bananas</h1>
               <img src="https://th.bing.com/th/id/OIP.CI6upkzzecPH0GLbzAsXSQHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{width:200,height:200}} className="m-5 container-fluid"/>
               <img src="https://th.bing.com/th/id/OIP.Yt7zSgEjIzQGUifmKbRoWAHaJ4?w=138&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{width:200,height:200}} className="m-5 container-fluid"/> <br></br>
               <button onClick={increment} className="bg-primary text-light  " style={{border:'none',marginRight:80,}}>Eat Mango</button>
        <button onClick={decrement} className="bg-primary text-light mb-5 " style={{border:'none',marginLeft:100}}>Eat banana</button>
            </div>
        </div>
        </center>
        </>
    )
}

