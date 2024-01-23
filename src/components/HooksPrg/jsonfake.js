import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

export function Jsondetails1() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(showdetails => setDetails(showdetails))
    }, []);

    return (
        <div className="row">
            {details.map((index) => (
                <div key={index.id} className="col-md-4 mb-3">
                    <div className="card text-center">
                        <div>
                            <img src={index.image} className="card-img-top" alt="..." style={{ height: 250, width: 250 }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{index.title}</h5>
                            <h6 className="card-text">Price: {index.price}</h6>
                            <p className="card-text">{index.description}</p>
                            <p><StarRatings
                                rating={index.rating.rate}
                                starRatedColor="gold"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="2px"
                            /></p>
                            {/* <p>Rating: {index.rating.rate}</p> */}
                            <a href="#" className="btn btn-primary">{index.category}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
