import React from "react";

export function Tech(){
    const gradientStyle={
        borderTop:'10px solid red',
        borderRadius:"20px"
    }
    const gradientStyle2={
        borderTop:'10px solid blue',
        borderRadius:"20px"
    }
    const gradientStyle3={
        borderTop:'10px solid green',
        borderRadius:"20px"
    }
    const gradientStyle4={
        borderTop:'10px solid yellow',
        borderRadius:"20px",
    }
    return(
        <>
        <div className="container-fluid row " >
        <div className="container-fluid col-5  mt-4" style={gradientStyle}>
        <div className=" mt-3 container-fluid   ">
            <h2>Data scientist</h2>
            <p>Data scientist is very important it is used to develop applications using artificial intelligence and phyton programmimg language</p>
            <div style={{textAlign:'right'}}>
                <img src='https://cdn-icons-png.flaticon.com/512/6009/6009939.png' style={{width:150,height:150, direction:'rtl'}}/>
            </div>
        </div>
        </div>
        <div className="container-fluid col-5 mt-4" style={gradientStyle2}>
        <div>
            <h2>Dot Developer</h2>
            <p>Data scientist is very important it is used to develop applications using artificial intelligence and phyton programmimg language</p>
            <div style={{textAlign:'right'}}>
                <img src='https://cdn-icons-png.flaticon.com/512/6213/6213479.png' style={{width:150,height:150}}/>
            </div>
        </div>
        </div>
        </div>
        <div className="container-fluid row">
        <div className="container-fluid col-5 mt-4" style={gradientStyle3}>
        <div>
            <h2>VR DEveloper</h2>
            <p>Data scientist is very important it is used to develop applications using artificial intelligence and phyton programmimg language</p>
            <div style={{textAlign:'right'}}>
                <img src='https://cdn-icons-png.flaticon.com/512/6750/6750111.png' style={{width:150,height:150, direction:'rtl'}}/>
            </div>
        </div>
        </div>
        <div className="container-fluid col-5 mt-4" style={gradientStyle4}>
        <div>
            <h2>ML Engineer</h2>
            <p>Data scientist is very important it is used to develop applications using artificial intelligence and phyton programmimg language</p>
            <div style={{textAlign:'right'}}>
                <img src='https://lh6.googleusercontent.com/BReDVpoaBUOuEVJPF-umgcAkyAQMu-SoHPHvKJlgXBF8rnkJJVIaUgxCgMygsGk5BP9xd8dAFneQdwvTkYt4z-re62LJnylWOL46e9CV2aJrw1Jqj6gEl0WgE9CGWx9aLRFn0y5gmzbBlztnxpImFMU' style={{width:150,height:150, direction:'rtl'}}/>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}