import { useEffect, useState } from "react";
// import {Layout} from "../Pages/layout";
import StarRatings from "react-star-ratings";

export function Product(){
    const[details,setDetails]=useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
            .then(showdetails => setDetails(showdetails))
    },[]);

    const downloadCSV=()=>{
        let csvContent="data:text/csv;charset=utf-8,"+
        "Title,Category,Description,Price,Rating,Rating Count\n";
        details.forEach(product=>{
            const row=`${product.title},${product.category},${product.description},Rs:${product.price},${product.rating.rate},${product.rating.count}\n`;
            csvContent+=row;
        });
        const urlgen=encodeURI(csvContent);
        const link=document.createElement("a");
        link.setAttribute("href",urlgen);
        link.setAttribute("download","product_data.csv");
        document.body.appendChild(link);
        link.click();
    };
    return(
        <>
        {/* <Layout/> */}

        <table className="text-center">
            <thead>
                <tr style={{backgroundColor:"grey"}}>
                    <th>Images</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="col-4"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {details.map((product,idx)=>(
                    <tr key={idx}>
                        <td>
                            <img className="smallimage" src={product.image} style={{width:200, height:200}}/>
                        </td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td>Rs:{product.price}</td>
                        <td>
                        <StarRatings
                                rating={product.rating.rate}
                                starRatedColor="gold"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="2px"
                            /><br/>
                            ({product.rating.rate}reviews)
                            ({product.rating.count}reviews)
                        </td>
                        <td>
                            <input className="col-3" type="number" min="0"/>
                        </td>
                        <td>
                            <button className="btn btn-warning">
                                Add to cart
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br/><br/>
        <div className="text-center">
            <button className="btn btn-primary mb-3" onClick={downloadCSV}>Download CSV</button>
        </div>
        </>
    )
}