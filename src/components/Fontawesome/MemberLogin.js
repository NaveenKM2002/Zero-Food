import { faComputer, faLock, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Login() {
    const gradientStyle = {
        background: 'linear-gradient(90deg, purple, pink)',
        height: '100%',
    };
    const gradientStyle1 = {

        // height: '500px',
        // width:'1100px', 
        // position:'relative',
        marginTop: '50px',
        marginLeft:'20px',
        marginRight:'30px',
        marginBottom:'50px',
        borderRadius:'30px'
    };
    return (
        <>
            <div className="container-fluid row" style={gradientStyle}>
                <center>  <div className="  container-fluid row bg-light " style={gradientStyle1}>
                    <div className="col-4 m-5">
                        <FontAwesomeIcon icon={faComputer} style={{ height: 100 }} />
                    </div>
                    <div className="col-5 m-5">
                        <h2>Member Login</h2>
                        <div className=" p-2 m-3    " style={{ backgroundColor: 'lightgrey', borderRadius: 10 }}>
                            <FontAwesomeIcon icon={faLock} />   Email
                        </div>
                        <div className=" p-2 m-3    " style={{ backgroundColor: 'lightgrey', borderRadius: 10 }}>
                            <FontAwesomeIcon icon={faLock} />****
                        </div>

                        {/* <input type='email' /><br/><br/> */}
                        <input type="button" value={'Login'} className="bg-success text-white" style={{ border: 'none', borderRadius: 10, backgroundColor: 'lightgreen' }} />
                        <br />
                        <br />
                        Forget<p className="text-success"> Username/Password</p><br></br>
                        <a style={{ color: 'green' }} href="">Create your account<FontAwesomeIcon icon={faRightLong} /></a>
                    </div>
                </div>
                </center>
            </div>
        </>
    );
}