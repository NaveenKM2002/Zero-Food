import { useEffect, useState } from "react";

export function Jsondetails() {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/data.json")
            .then(res => res.json())
            .then(showdetails => setDetails(showdetails))
    })
    return (
        <>
            {
                details.map((index) => (
                    <>
                        {/* <h1>{index.name}</h1>
                        <h2>{index.DOB}</h2>
                        <p1>{index.place}</p1> */}

<div class="card" style={{width:288}}>
  <img src={index.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{index.name}</h5>
    <p class="card-text">{index.DOB}</p>
    <a href="#" class="btn btn-primary">{index.place    }</a>
  </div>
</div>
                    </>
                ))
            }
        </>
    )
}