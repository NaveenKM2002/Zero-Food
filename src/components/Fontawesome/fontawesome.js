import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCheckCircle, faHeart, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation, faHome } from "@fortawesome/free-solid-svg-icons";
export function Font(){
    return(
        <>
        {/* <FontAwesomeIcon icon={faSmile} style={{width:200+"px",height:200+"px",color:"yellow"}}/><br/>
        <FontAwesomeIcon icon={faHome} style={{width:200+"px",height:200+"px"}}/><br/>
        <FontAwesomeIcon icon={faHeart} style={{width:200+"px",height:200+"px",color:"red"}}/><br/> */}
        <div>
            <div className="container row bg-primary text-light m-5 p-3 col-sm-12">
                <div className="col-2 ">
                <FontAwesomeIcon icon={faCheckCircle}/>
                </div>
                <div className="col-4">
                <p>Information Message</p>
                </div>
            </div>
            <div className="container row bg-success text-light m-5 p-3 col-sm-12">
                <div className="col-2 ">
                <FontAwesomeIcon icon={faCheckCircle}/>
                </div>
                <div className="col-4">
                <p>Succes Message</p>
                </div>
            </div>
            <div className="container row bg-warning text-light m-5 p-3 col-sm-12">
                <div className="col-2 ">
                <FontAwesomeIcon icon={faBell}/>
                </div>
                <div className="col-4">
                <p>Warning Message</p>
                </div>
            </div>
            <div className="container row bg-danger text-light m-5 p-3 col-sm-12">
                <div className="col-2 ">
                <FontAwesomeIcon icon={faCircleExclamation}/>
                </div>
                <div className="col-4">
                <p>Information Message</p>
                </div>
            </div>
        </div>
        </>
    );
}