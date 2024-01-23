import React from "react";
// import Img from'../Home/bike.jpeg';
import "bootstrap/dist/css/bootstrap.css"
export function SuperOverLeague(){
    return(
        <div class="bg-dark  text-center d-flux row" style={{height:500+'px'}}>
            <div class="text-white mt-5"><h1>Super Over League</h1></div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                <img src='https://th.bing.com/th/id/OIP.BQXGwAeu3sP9J8T-o5amoQHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7' style={{width:200+"px", marginLeft:70+'%',height:200+"px"}}></img>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                <img src="https://th.bing.com/th/id/OIP.5KZhjlbsChYy250nJaO85gHaFj?w=220&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{width:200+"px",marginRight:70+'%',height:200+"px"}}></img>
            </div>
        </div>
    )
}