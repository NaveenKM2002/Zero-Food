import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
export function Congratulations(){
    return(
        <div className="container-fluid " style={{backgroundImage:'url("https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png")'}}>

        <h1 className="text-center">Congratulations</h1>
        <div class="card p-5 text-center " style={{marginRight: 10 + 'em', width:40+'rem',backgroundColor:'skyblue', marginLeft:23+'%'}}>
            <div className="text-center">
        <img  style={{ width:10+'rem', textAlign:"center"}} src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" class="card-img-top" alt="..."/>
        </div>
          <h5 class="card-title">Abhishek</h5>
          <p class="card-text text-primary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          <div className="text-center">
        <img  style={{ width:10+'rem', textAlign:"center"}} src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" class="card-img-top mt-5" alt="..."/>
        </div>
      </div>
      </div>
    );
}