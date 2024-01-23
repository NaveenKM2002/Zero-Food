import { useState } from "react";

const Contact =()=>{
    

    return (
        <>
        <div class="container-fluid row bg-dark">
                <div>
                    <p class="text-light"><b>Zero Hunger</b> <br />Landmark</p>

                </div>
                <div class="col-md-5 col-lg-3 text-secondary" style={{ marginLeft: 20 }}>
                    <h3 class="col-1 m-5 text-light">Some Trusts</h3>
                    <a href="https://www.wfp.org/">world food Programme</a><br />
                    <a href="https://www.thp.org/">Care</a><br />
                    <a href="https://www.thp.org/">The Hunger food</a><br />
                    <a href="https://www.bread.org/">Bread of the World</a>

                </div>
                {/* <div class="col-1 m-5 text-light">
                    <h1>Programs</h1>
                    <p>Air Freight</p>
                    <p>Ocean Freight</p>
                    <p>Large Projects</p>

                </div> */}

                <div class="col-1 m-5 text-light">
                    <h1>Resouces</h1>
                    <p>FAQ</p>
                    <p>Submit Ticket</p>
                    <p>Contact Us</p>
                </div>

                <div class="col-2 m-5 text-light">
                    <h1>Food Produce</h1>
                    <p1>Subscribe Food Produce to get updates.</p1>
                    <div class="btn-group  " role="group" aria-label="Basic outlined example">
                        {/* <input type="email " class="text " placeholder="Enter your email" /> */}
                        {/* <button type="button" class="btn btn-outline-success "><FontAwesomeIcon icon={faPaperPlane} /> */}
                        {/* </button> */}
                    </div>
                </div>



                
            </div>
        </>
        
    )
}
export default Contact;