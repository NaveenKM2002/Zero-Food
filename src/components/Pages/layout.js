import { Outlet,Link } from "react-router-dom";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCreativeCommonsShare} from "@fortawesome/free-brands-svg-icons";

import {  faCircleChevronRight, faHeart, faLocation, faPaperPlane, faWheatAwnCircleExclamation } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBowlFood, faCamera, faCloudSunRain, faComputer, faHouseFloodWater, faMobile, faPeopleGroup, faPhotoFilm, faPieChart, faPlateWheat, faRocket, faSadCry } from "@fortawesome/free-solid-svg-icons";
import { faAngry, faCalendar } from "@fortawesome/free-regular-svg-icons";
 const Layout=()=>{
    const bg1={
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhyX1DUXgpvqbT_WG_P6Yw8Xrz-EqPeY-Pw&usqp=CAU")',
        width:'100%',
        height:'100vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'Cover'
    }
    const [isHovered, setIsHovered] = useState(false);
    return(
        <>
        
                       <div style={bg1}>
        <nav class="navbar navbar-expand-xl navbar-dark bg-light">
            <div class="container-fluid ">
                <a class="navbar-brand text-dark" href="#"><img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirgmm-IHn1JPTF-tqllTvqTucX4-Dre3rWA&usqp=CAU" style={{height: 70}}/> </a>
                <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-dark"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                        <    Link to="/home" style={{color:"black", textDecoration:"none"}} className="m-5 p-3">Home</Link>                  </li>
                  <li class="nav-item">
                   <Link to="/blog" className="m-3 p-3" style={{color:"black", textDecoration:"none"}}>Problems</Link>
                  </li>
                  <li class="nav-item">
                   <Link to="*" className="m-3 p-3" style={{color:"black", textDecoration:"none"}}>Solutions</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/contact" className="m-3 p-3" style={{color:"black", textDecoration:"none"}}>Contact</Link>                  </li>
                </ul>
              </div>
              <div class="col-5 m-2 p-2 text-end">

                        <a class="m-1" style={{ color: "darkblue", justifyContent: "end" }} href="" bac><FontAwesomeIcon icon={faFacebook} /></a>
                        <a class="m-1" style={{ color: "blue" }} href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="m-1" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class=" m-1 text-danger" style={{ borderRadius: 10, }} href=""><FontAwesomeIcon icon={faYoutube} /></a>
                        <a class="m-1 text-danger " href=""><FontAwesomeIcon icon={faInstagram} /></a>

                    </div>
            </div>  
            </nav>
            
           

        <Outlet/>
        
      <center> 
        <div class="container-fluid row text-center text-light " >
        <div class="col-lg-5 p-5  text-start"> 
         
         <h1>Hunger</h1>
         <p>Addressing hunger requires a comprehensive approach considering the various factors contributing to the problem. We can work towards a world free of hunger through targeted interventions and investments in agriculture, sustainable food systems, and vulnerable populations.</p>
       <a href="https://www.wfpusa.org/articles/how-to-end-world-hunger-6-zero-hunger-solutions/">  <button class="btn btn-success"  style={{border:'none',width:100}}>View More</button></a>

     </div>
        <div class="col-lg-6">
         {/* <img src="https://th.bing.com/th/id/OIP.189z4DQ4exIBWjpUB013GgHaNP?w=115&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" class="col-lg-6 container-fluid"/> */}
        </div>
        </div></center> 
        </div>
        <div class="container-fluid row text-center m-5 ">
                <h1>Problems Facing In Hunger</h1>
                <p>At about this time of a year, some months after New Year's resolving have been made and kept, or made and nergiected</p>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faHouseFloodWater} style={{ height: 100, width: 200 }} />
                    <h1>What is World Hunger?</h1>
                    <p>World hunger refers to the chronic and widespread lack of access to enough nutritious food among populations worldwide. It is a complex problem that affects people of all ages and genders.</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faBowlFood} style={{ height: 100, width: 200 }} />
                    <h1>The Scope of World Hunger</h1>
                    <p>World hunger affects hundreds of millions of people in different regions, with sub-Saharan Africa and South Asia being the most affected areas</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faPlateWheat} style={{ height: 100, width: 200 }} />
                    <h1>What are the Causes of World Hunger?</h1>
                    <p>According to the United Nations, “Hunger is increasing in many countries where economic growth is lagging, particularly in middle-income countries .</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faCloudSunRain} style={{ height: 100, width: 200 }} />
                    <h1>Climate Change and Environmental Degradation</h1>
                    <p>Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faAngry} style={{ height: 100, width: 200 }} />
                    <h1>Conflict and Displacement</h1>
                    <p>Climate change and environmental degradation, including deforestation and soil degradation, significantly impact food production and availability</p>
                </div>
                <div class='col-3 m-5'>
                    <FontAwesomeIcon icon={faSadCry} style={{ height: 100, width: 200 }} />
                    <h1>Economic Factors</h1>
                    <p>You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.</p>
                </div>

            </div>
            <div class="container-fluid row bg-white">

                <div class="container-fluid row">
                    <h2 class="text-center text-dark m-5"> Soving hunger problems</h2>
                    <p class="text-dark text-center " >Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa</p>
                </div>
            </div>

            <div class="container-fluid row text-center" >
                <div class="card col- 4 md-3 m-4 " style={{ width: isHovered ? 600 : 550 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhUYGRgYHBwaGBwcGBwaHBweHhgaHBwcHB4cIS4lHB4rJBoaJjgnKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAD4QAAIBAgQDBQcCBAUEAwEAAAECEQAhAwQSMUFRYQUicYGRBhMyobHB8ELRFFKS4RVicoLxI6Ky0jNTwhb/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACURAQEBAAICAgEEAwEAAAAAAAABEQIhEjEDQVEEImFxEzKBUv/aAAwDAQACEQMRAD8AuVAo6L1pZDTC1trPB0FGQ0utFU0yMK1EWllNFBNBmFFSAoCzRVFIJgVIVEJUwlGh6AK9ivQlSCUaMRivYqWk12k0aePAK9qYSpBaWjAqiaMy1A09GB11EivNFGliFeRRQlc1GngJWoFaIxqJpkGVrwiiGoEU9ATVAijFagVo0YERUGFGKVE4dGlhciokUwUobJRp4Ay0JlphooTEUtGAMKE4o7vQWalplnFC0GmXcUucWpAqPR0elUejq1MG0ejI9Jq9FV6YNq4oiuKUV6IGFAOK9TXEpRYogigG1xaIMWk1NSBowHBiUQYlIgVIAUYDwxBUveCqPP8AamHgFBiEqHmDBItG8eNN5XNI66kcMvMGanoLIYld7ylQ1e6qeHpr3le+8pWa6etGDTJxBUS9A1V2ujBopc1HfjQy9RL08IeK8MUuXrwvRg0ctUGNBL1EvRgFZhUC1CL1Bnp4NGL0NsWgs9DZqMLRHxKE+JQ2ahs1Aes9CZ65moTtQHO9Lu9SZqAzUgi70IvXrtQZqTZLJ+0mZQ68RSyNsQkAeHMeda7s/PnEQOBAMxIIm+8G9VXZDImEuGMRWj95tNXSYvT0rG8rPTWcYbTGPEUwmIDSaOvUUwiqaJ8nKC8JTSmiKaVVB1qTLP6j5VpPln2i/Hfo4poimkEDj9c+Kj6iKKhbiZ8It4car/JxLw5HFNTBpRQLkFlJi5lh/SftFDzJxwO4FbqN/wCkn7mnOcovGxZA0DM9ophmH1AROrSSo8SNqpmzeYaQFI6BDI+VU/auNisLuxg2BtBiLWpXlPopDHaI/iHbH1QiLJ8tiApsxB4kbU17JYuGHZUUliCS5aCRM/DJB4AmZrOvjYjYZRnMal7vA738jA86P2Hm3wcSQpCmzStvIjapl71T6QGr3VWU/wAZxLiReNhBHheh4/aOIwA1kQLlbT1MVXnE5Ww1V01iEzOJqLa2kiCZvEzXDHcbO283YyfyaPODK2oxBtIkb3rmxANyBG96xCzJlt+H96i5O070efEZW3TGVhKsCOYNd7wbSPWsKSRxtaQPlNeaJ4mjygytw2YUHSWAMTEiYqResN7sfqLX86i+GOBPrR5QNyXqLOOY9awa5lwpUEwd979TXLfckDhPnPhuafkMbRs2gJUuoIMRqEz+GuxMVQJLADe54c6xGJgcZ9f3qJLRp1W4CbUeYxsXzqAga1kiQJFxzobZ5P514cRx2+tYl0IN68jkbAbWM0eRY2mNm0X4nUTtJ3rw4yzGoSNxI47Vivchtz5VxQLsTfflS8zxqM12phIYZxPIXPy8KCO1sIidYvzsfQ1lnwl5fWhPhCKXkMa3+OQ/CwPgRSp7TQnSGBPjWXfDHX1oDYfU09g7afF7RX+dR5iq9+2VBjUfICKp0yrv8Ks3gpNROSxOOG0/6TRsHbODWuxYeZp/Ldu46fqkdaOwc7L9KA+Sb+Ws1tF2Z7WAwMQ6TtLCV/qW48xWowM6CA0SDsynUp8ONfNP8NYj4aLlszjZZu48A7qbqfEfcUrxlPa+oYefSdOsTvB39KZw84h4j1rA/wD9Y+iRhgPFjMp4xuPCq3L+0mYRI1KxJLFmXUxnhvAHSKnxV5Pq6Y6TGoSdhNeYmdw0+JwPWvma+0mZMSuGeMFD6/Fapt29mHOjTh337hNuO7UeNHk+npmkiQSfLrHGu/xJY+EzyMD6TXzp8TMYo0NiNEXC90cgIWJ86QGDjJZHaBYDzpyC19RyvaRYAuqqLzJMi40j/wAjJjh5M42FhYm+knmTf+rf1r5ZlcTMoSQQxIC3GqBx0ztTGHmszMBgApIB70nvWnvQTR/0v+NtnOxBujRG03Hqt48qqcfsvMAEadSgySG1eo3jyrzBTHxURffMjSZKwLAn+1KsuKcXTjOWQd7SCVU78trijR4ymsrrIOqLAR1oqiaZywTGk4Z0wdIBmGPMHhsa8fBKEqywR1/akjxst0DTXKKmV616MOngCaetRLeNMe74TUNMTSsVKGokT8pNeExzqWhiYEk8Bxp7Ldj4z20Ff9RA+Rv8qWUK5nnn61JHJ7ovwAiT5VZp2WoYK7rq5SF6bkSRNF7SdMrhl9aJyjd7Huhrmf2pnitxMm4icNh/tNeNlH4gDxP7bUxk+0BjHSHKsN1eNY22uQRfcU++CiAM7Acix3PCBxo2jwioGSU/rv0SfvUU7LZjC/T7CrfC7UwGYpJDiRDd2Y30j9XlNO5TOBV7wVeR5i12gd079Ke/keM+lDhezWMx72lBzJknwA+8VY4Hsxhr8bO58dI9BJ+dX2u0yOt7Uti5xRZQznkiyP6jCjzNVsLxVWJ7M4R2Z18GH3BpPG9mP5cVvBln5g/arXFzjQSWVen/AMh8wsAHzNUGN2qXJVExMZpO5IQcpVAFIjmTU3lvpXjPsti9jsCV1oxHBZJ8wFMedJ5nJhCELrrbZB3nP+0Xq0wOzsy9sfEGHh//AF4UKT0ldh5mrPL5VMNSuGioDvG7f6mN28zRaXizb+zri7sN/hUyxtPLu+dOp2aigaEUHiz/APUbymAPSrg4YHDyFDZaVtpzjIrTlQRDMzDkxlf6fh+VF1RaT60w6eFBI8KQYJJH5vTCNSyyPD8uKawzNXUpKpNqHn8rqW3CPkabweJ5UwsEQeP/AD/egbFDmcvCGOMAedqmOzZMcrD6Vbfw0lRwBn02+tODLdPyDS1WRWYfZ4uY6CmstkgtyN/pVgqgCDvRMXBsF4yJ+w8ppfZW9dPMvh6WCx8Qk9B+D50vhLqc22J9Zt9auigCmNyL9AOFVGWxbk6Tvcz6UDTJy0QQOVTTKaBtMC08xzoxfumOU/OpYZLG9uFvWlp5Q+z30uAJJMxbz3PlU+0MU60BWD31te+pB4xf50LK4gGKkCy6z81n61PtzFKvgvEqoxS1xYHSR43Ap7sGZXnZ+VGIWUMR3wLWP6gdtrSPOn8Ju43vWQNICOAZZpjTpUQPEk+VZXK+0DI5fDUNqOplM6rkxEePWrt3dU96DKEaWXzAt1JotzoZpp4VlVrFjAsb2ny2qYwwfyazWFmnb9byIWdUwBt48Tc8a1iZkGQ6CQgAKCJYkHUVXYxv9arconDYFoA3IBJgeJ2+1AzWfy2CD7xw7iYRTEx/m23tvXnaOAuIyqCyNaYBM6WuYiWO3oKyXtZk3/iCXGk6Fi2kQJFgTbwonKW4Lwsmt5jHEOGr4CJh65g2YwNpHEncGTSuPi5xBp94GYrPeWACQII0kTzvNS7A7mXwMN2GvbTIkApIHltTPa2fOHiLKCSUSGOnukCWFuFZ+XeL8VA2UDlnzOIG0BBqZQAJLiBAHGqP2gy0ZkJLaV0gSTYE8J8TWs7Oz+Fg++fMaSoVSQw1XDNAVeN4rLdo9pJmcwjpqALICG3He+lVLbdTZJMq17RyHf1AbmiJ2eW/6uIxcmY1X0gGwX+UW2FW+bOxEQQDB8JoOazgCqmkbE7yNz0/JqZyVZ0pMzkkZTCC21hVfjLmEth4zqIssyBeDAaRWlyHeDiB8QF7kmP78KrPaHF90hfQSZAXkDzJHAxVS9o+uyOF23mEGyFgtpUcDdttzVxi9pPiIGJcTe7CNuIUAGqdgHjEUd0geUifoacCDQCp2t6bUuUlOWpv2uuCgLorrMMCmnqNrEcNqu8j7QYLqCAVXpGkdCRYVks0mpSr/CfU1VNlfdozoWV4s0wdwYtb1qvGZ0XlX05sypGpTK8wRHrXiuCJ4HjM/SvlOB7QZhD8UnY2gnxj9qdw/apt2TxKsVPkVj50rxonKPoz4sUJnNYxPa1QLl/BgrHwmBNMZX2mV4kpJ/SSVjwN5pWchLGld6Wd78KWwM3rG0f7gfp+1T0UjY5H4GiKSt9x9OooZE1JHjetWZnCeyweP1qwwEJJP6QeY2g8PIVUrYytxuRxHUVd5B9a6bbib78j4ftRanDWHhRHM/n3+VOOVRSTUAwEudh3VHM8YoLYRc33+Sj7tURpXZLBZzq4A+h4ef4atFysQfGbVPJYIAAHwj59acdbN0X/AMj/AGqpE3soo+Ik9PQX+1Z/LQHJ5QKs+0+0MPLpLk7MqgCSzEGAPSazGDng4JQHe4O99tqnlLYvjm40uVeVTkQR+elMILgCqzIMfdqTw/8AY1Yvjpho2I7QvC9yTsBWdaSKPCz4UuB3mBZdI+K7gGKZyzYmdLIiBQiurAsbA84Ez3RtNUKhXJbixJI8TNav2Lwe9iooEsgsSYs4HDxNXZIVlV2S9n8ZcyiEhWDG42BVZA6jbpBqx7SyGNl8RcF8VGVwzKq8tQu0iRJ1HeLVtsTs8HFXGkhl3gmCNJEEH8sKxOezJxO0cyGicPDQJ/pDYZPnOITS3dOdWGMLKiBMbg9OtN5bDQTpAniYqtxsc/CPOnci/drG7jomafy+JhnETDxDBfVpAMEkLJvyia0eWyuCi9xVAO83J8Sbmvlfa+Zds9ggAgK6KDeDLS0HwJHlX1Ds1+7FdHGZxn8ubnbeVn4K43szlnYOE0tMgqxWDO+nafKsp21lv4h9TsIHcWzQVEkMdxe3HlWw9o82cLLYuIu6oY8SNK/Misb2YWOAmtSDpi9jAJAN+gFT8nWVXxzypDtTsjFzA0IFbUwYgHvLb9R2gc5HhSuY9lMfLMr+6LruSnfhgDpkASLwZ2r6T2LnFfBw2QCCIjYSCVO3UGmw5EyR5VXHqZUcv9vTEZlwMJSzDuWY+AB+9Vv8UjsHQ2MoQdxCgj11UTHxkxnf3s+7xMYiQTv7yFE8oirftDsLC93GAmhkOoAfrgQQxYztxmstk6rW8b9EOymALH/MPqP3o/avZyYqFGmGF+hB3E9RVf2W+pJWbkxPMcjtwFWIxNQtf+/586duIxTpl/dgQAAAEPKF2DcZ4hqgcNlGoFQHJO4kDhY2248elPZsFSWF1Ih14xwI6is7j4oUg2JbYkTbYfKKJ2MyHSgG5vx4n1FV/awjCbyHh3hQHxwT8IoWKQwI8/QTWsZ2B9jditmi26gfC8GGP8sxFgN/Lw9xewHwu7iMgaSNOsaiLiQOWxqGU7edHwgxJw8Mp3AYFiCTbczJvzI2NXXtZ2imZxUOGQwA06hYM1+J3G16dvKX+CkljNvkvWl3yRHC3CrYYRjUf0mPSP2plMCRcfD9KPIvFnVw3TaRx3o/+KYotqP9f96czKw55A7T+4oT5W+1P2Xo4gFTdARQkamFE8YoDwYIAnUfTrNMZLMKjg3IJIMCw1fS+9RRes+VTczFwLjhU2iRe4I1Xnw6A8vGrHARVFqqsm1vT5VZ4bGplVYewzauxcXuMebBfQT9qGh+dqr83jGESd5f1MfSadokLe0GQXGwO8SGB1If820RxEE1mcvkHwGAYWaL/ObTtV72q7ldcFVkAcJvfyoIxe6GLWM6iPIr6EH1peVzFZ3q67PIGHOnVcwOG5ueS/grJ9r5s4uITqlE7qACEEblRyPM3tQTmGQNho5KHc3kggTuSB4i/WgLNPjxy6q3YLhetbL2DeMZ5sSn0df3rJ5bDvuauuzc8cB/eBdUA92YmRzg9D5UcvwrjOn1JMQHY3FZLPdgKuafM62l1I08CdBFzxFktzqty3ttpYFsuQDb4/3UUZfaZ8YvIVE0yoFyGtEk72BtFZ2coOOWquZM1aZbFgRb5TVZgi87R41LHxgiFzJC3t9fLep5Tem3Hp62MDjJ/qnblJEfKtlks5Gk8K+fPjDDT37S3eB5HSTAidt5vzp7Le2WDpg4eLblo/8Aetfj43x6R+p+SXn/AF0+jdqw2C+3wEjxFwflWM7UzRXCOIIJVWNr/pJH0omH7a4WIjYQw8Ua1ZVJCRJED4WJqqOOpQpMnUQV46ePgLisvln7pWv6fnP8XLjf7n9tP7GtGVy/CdR8izkHz3q57RchHYbhWI8QCazHZXa2Bl8LCV8QLoULf4jClR3VEnxAiiZj2yy3wh2abQEYTNo7wFa+45svtg2xEACOxUObxcxqBJ+hrW9t51Bg6AWJJWNwYkA94HlI86x+eyq3cgwpgAHhMDxiwqxz+psFcS2g2sDIInfp12vS5cdw5zzaLlM8cNlBaEBJiJI3Ig8frVgM8jlnwnuDJXYjmNJvHlsBQez/AOFxNKFHL6RJLMLgd4ggxF+VZ7tTLnDfShMBmIuJAnu357+lGTlc9Df/AD212K+pQR+rY8N7jx6VQ9oZcqQQLGbbxeaD2fm8T9TNpb4rDcGAY48yRemO2s9dIg90E9SeIk8RHrUzjZyw96VuIo3KkdR3hQ1wx3jIICn6cjXHtA8VB8yD5cKimIrK5AIIW4PU861yyMvtQ47XNW+QsgIGxBnyqoxnkmrnsp+4V4al+4quXpPCfuMEQSA28GOu30+lMZUniLwAfKKImCD0PT8/JpPMAoQVJ/BWcursw1mMORtNV2Ph941Yhu6ZBBuOdVjxPxGnE1BGo6NSaNRkerQdVqlY79P/ACFLo1c7/b61Nio0GUfb0qywjaqHCxCL1a5bPqo5sdhU4dWs2qhfNIuIC51FIC8+6CB9T60x2h2jpQqvxNv0nYeJ+g8Kz+Fow9TuZIueN+AHM0HxXPbec1YffIViVhdiBc+twfMVTZRSSFdgU6XtyiqXO5rExXLhWMzYAtF54flqa7KaQ6uG1EHSLiDG5FqcmQe+RnPKpdipKqbgWMeFeYGEOsUFY4G3hRlxo2B+1P6V1p5SosB9qNhONopRLjiD40bLAjl61NXKWxfhcfy/Y70/2XdNXMmlAA3vBxhx9RXvYmLKb/q+wquXpnw/2XaYkVDOYevDZVMEi3AEgyAelqirgdalhvHGsf5dBDPppyzKRsu0gkQQYnjFY5XgyK3uONSMvMH5iKxvZmCGcK2zBgSeBKGD4gxW3x3quX5p+6H+yc0Q6E2E387H61o2XSxZb6uu1ZrIpodS36WEjwNaL+JkWRjx2il8k7X8N6sU3bjzocgjdb9YP2NV/ZmHqxheQvev0iPmRVn2+hKfCe6Qdx1HDxpTsHCJ94eMKAfU/YU5c46izeeVa9phkVdStECBqHSYtsYH5emcn24mLOGU0gqVZYvG3pSufdnChhsOEkfTwpf/AAp1AxQDsCYIYkRMx9vGp4zZ37Xy6vTshmPcYr6pYgFQR4iN+lDz+bD3m8tPrUGwEa+s/wCaTEE8OdJ5jKqsKrXYiJNonfnFVk3U8eXLj3Fn2TmAUYwe60H0FxRs/iq677C3SOH/ADS/ZeIvuwDsZ+vGlcxh6GkGRPP5EcKWbyX5XxCI8T4Cp4CkK5EwQAfEm1enNAiJjnx/4oeNmRGkGBvczPlVXUTPavxMOn8opH/afQ0mMNiwuCCd7+dWeE48iCB+eVHK9Fxnbkx2B48qIMbWQvT7X+lc6DvfKvFhWEcPw1EXyMZhxAA2sfWgHDriLX3/AGofnTSTBqaGlkfhUlerZnUnnRmW3p9aXw3mKYNhyqaqHUwi0kGIvVll8IYS62EubIOE8z0FAyoCr3th3m//ACo6mgZrNajJ3NlUXjkBU2qkdiNJnfeCf+5z+cBVCMs+O+hW7qkwSLSb3jjt4RVh2jjkJb4mhQOZ4Af5Rx51e5HATDRVAEgb8STux6miXOzs+jGQyyIoRYGkAgxZuZPWftUfaTsxMTBbEA0vhiSeLLN1Mbi5I5HzrmxNvH5/3/avcfMs+G6K0hlZSDwkR8jUS2XVZ1jIo3hXvvkmDc1LJYGtwh7pJ0nVaDffztS2a7KxPeumEDiAGNQAAmAWFzwJitpiLbJ0tMEAiZtRTiRSy5ZsIBHEMBf8+XlUlE/k1NXEcMkMzAfhim8viqqLhophSzy28tAMDgAFWo++YJokaQZstzxgniJ6VyH8ii3TnHDKuT/xU7xQEJ/IqTP5edQsVn/J/JrNZGTjd0j4nv61fNic/tVGmUIxtQjSHMGZ5mr49Ssvk9wZHjGIO2sT8qvQw/Ptyqr9+qtoKCHYMG46hABB6RFTDQTJJ3mefGi3T4ft152vjRht1EDrP9qX9nsaNSHjceVj8jRMZFf4txtYH1mk8sgTGuTtaAN403HKxJ8KczxsTy3ylX7vB6bX2E2NXPZWLhgsu0fCGg6547d0AzYbX5ms/iXE7jqP2rzAxnSSjCNypAKn/bEVMVzlvpLMuC76ws6mmNpk0tmUwz8JO436eAH4a9z5LuWKKhO4QFRPEwSb0AW/Bf8AeqhOwkgWDaeEggb3i0nnXe/G2maG+I/BoA8Y8IJgeVBD8iD+eNGFuI46amGlYJ4CbngAKAmGT8SbbgSGO9xJgx0FHczufSvHxLkmTzI58yNm+tOVPKfYmXw2B090iJUzEg7b12cw2UBiDANzFgev71wzKOI1QwkiAQQYvMbg9Oe1qAGYq0NIESNUk+BAuPTzozaV5ZxTTNESNx+XFeHN0PCxNZAJt40LPQogG5p3jGE/UW8vHDYzWxqfv151TJjRvR/e1ON9Qw8QG1vWiJNV8CvQOtMlopccPpTuDmhBLgiL8xVJgkD4r9aLiun6QPQ0HGm1lhqJ0qb7SZPEDnHpSOY7WTCsg1udyTIHieJ6C1U75xyNMwNvyaCi0pPyd5fg6maZ3QngQfQkwOlWeZ7UPBtosPuapVMfapDreizVceWe1xg9qaiFGs6otqNjPOrcl0GtjqjiDDR4ggHzrK4WMqENJLfyhdvM/aiPnXdoJhRcLJ8vH6VN4b6az5JPawzWYGI7MAylt9RBJO0iDx/eiHtB8uD7swWO7KDBjhNJ5SdQgTxjfa9Fx9BPe1G2xA/cxTkzplyu9rn3q46anecVU16u6A940wNo4eNIa4pPKYYTVB5eU7j8500rzSsVxvQyOBYg3FoteRv0ipo4nlS5jc8ORn/iuVuRjwpK04x858qEN9iKgH617PW1AeM9uQ67fSlsPDBPdPgJ36imN+tevYb9aelZpXGwtcCdp4HzEG54Ud2KrZdZAAvx/vXus/n968V9qel4l0w3feU8fhgcIWTPlXqZUapK3BsefX8FPI/PehueVG2icIJhvw59Pyai7MNovvP5ahqTuOBqZefHjNSp435vXPiGIkkDYTYeHKhOxoTvO2/yplUcbBV95HgaEuEqWBtve9EY9b8ooTYgiIE85PXh6elNFx6Fnbj1FDxxoJBO3GLcyAa8JFeYuOx3Ct1bf1H1qk2gYmEGGocTafXcXoa4kWYQRx+kxt4ipqsEHl5j6ih5ttbTAmO8Zjzj0oTYJmAzAmBPOxBA5EbbULQF3XvdfHrXiY5UW2uDOx8vOpu5iUNj8QNxbaaacCOFq+Ejw2IoMRY70YuDBKiehHyqGtutBhCvQK6upKSivYrq6gPa9rq6mSa1166upG5TU8Jd2511dQPs5lzcQbmjugALAi1/P1rq6lVF8pjFna9mPltamlJrq6lfZ8fT33kb/Q/apqZAvvvY11dRVRMNFqmH6/vXV1JTmcDwrjXV1AdNQc11dQHquakWArq6gIM/KvEeurqCRdrzNQZq6uplQWv/AHoTL0rq6hFcduVDLV7XVRPCh3Nh9fCg4htFvznzrq6ggHS0eJ/PSvcE6R43+wrq6mlBgrXFj6elD7wtFe11Af/Z"
                        class="card-img-top" alt="..." />
                    <div class="card-body ">
                        <h5 class="card-title text-secondary">1. Break the Cycle of Conflict and Hunger</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
                <div class="card col- 4 md-3 m-4" style={{ width: isHovered ? 600 : 550 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD03i9Fn2cKyqJDNgOmO-eCcYA4X6iSYZ2NLtddtfMWjTfdEwufBnwcR4gVWYTH_ETNJs&usqp=CAU"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-secondary">Increase Sustainability and Build Resilience to Climate Change</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
                <div class="card col- 4 md-3 m-4" style={{ width: isHovered ? 600 : 550 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYWKTJZVW2tNcMqJqZoX-aWXT36VzQ5x99Q&usqp=CAU"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-secondary">Address Poverty & Inequality Through Social Safety Nets</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
                <div class="card col- 4 md-3 m-4" style={{ width: isHovered ? 600 : 550 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTe1bNY4V1Pq1zwEPVk400CDIyn27iUGC5bvkA-hyKIFhf8Xcb272A4XVOxHgnr_F1M_E&usqp=CAU"
                        class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-secondary">Help Rural Farmers Connect to Markets</h5>
                        <p class="card-text">Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
                        <a href="#" class="  text-success">Learn more</a>
                    </div>
                </div>
            </div>
            <div class="container-fluid row" style={{ backgroundColor: "lightgrey" }} >
                <div class="container-fluid  text-center col-5 m-4 p-5  ">
                    <h2 class="text-dark">Related Examples in India</h2>
                    <p class="text-secondary text-center">Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.
                        Integer efficitur tellus metus, sed feugiat leo posuere.</p>

                    <div class="container card-body  m-2 p-4  " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">First state is Bihar</h1>
                        <p href="#" class="card-text" >Bihar is among the poorest states in the country with a very high incidence of poverty. Although in recent years it has witnessed a high rate of growth,.< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>
                    <div class="container card-body  m-2 p-4  " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">Second Jharkand</h1>
                        <p href="#" class="card-text" >Integer efficitur tellus metus, sed feugiat leo posuere ac.
                            Morbi vitae tincidunt mi, et malesuada massa.< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>
                    <div class="container card-body m-2 p-4 " style={{ border: "1px solid green" }}>
                        <h1 class="card-title">Third Chhattisgarh</h1>
                        <p href="#" class="card-text" >Integer efficitur tellus metus, sed feugiat leo posuere ac.
                            Morbi vitae tincidunt mi, et malesuada massa.< FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "green", height: 30 }} /></p>
                    </div>

                </div>
                <div class="  container-fluid  text-center m-5 p-5 col-5 ">
                    <img class="img-fluid" src="https://cdn.downtoearth.org.in/library/medium/2023-10-16/0.97054700_1697448185_untitled-2.jpg" style={{ height: 500, width: 700 }} />

                </div>
            </div>
            <div class="container-fluid row text-center">
                <h1 className="text-warning">Food Wastages</h1>
                <div class="card1 container-fluid col-lg-4 col-md-5" style={{ width: 300 }}>
                    <div class="card-body text-dark  pad container-fluid">
                        <img src="data:image/jpeg;base64,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" style={{ width: isHovered ? 350 : 300 }} />


                        <div style={{ width: isHovered ? 'black' : ' green' }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        ><h3 class="card-text text-success">Who have more money please give to poor child .</h3>
                        </div>

                    </div>
                </div>

                <div class="card1 container-fluid mt-2 col-lg-4 col-md-5" style={{ width: 300 }}>
                    <div class="card-body text-dark  pad container-fluid">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPpLA0BHIoN_e4h6n32STtWNHxTYfLT8UJw&usqp=CAU" style={{ width: isHovered ? 350 : 300 }} />

                        <h3 class="card-text text-success">Who have more money please give to poor child .</h3>
                    </div>
                </div>

                <div class="card1 container-fluid mt-2 col-lg-4 col-md-5" style={{ width: 300 }}>
                    <div class="card-body text-dark  pad container-fluid">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjF88SpiViqZaGDH7cJEf_2ECE6LY8BrbO3w&usqp=CAU" style={{ width: isHovered ? 350 : 300 }} />

                        <h3 class="card-text text-success">Some quick example text to build on the .</h3>
                    </div>
                </div>
            </div>
            <div class="container-fluid row bg-dark">
                <div className="col-lg-3 p-5">
                    <p class="text-light"><b>Zero Hunger</b> <br />Landmark</p>
                    <a class="m-1" target="_blank" style={{ color: "darkblue", justifyContent: "end" }} href="https://www.facebook.com/zhtfsvg/" bac><FontAwesomeIcon icon={faFacebook} /></a>
                        <a class="m-1" target="_blank" style={{ color: "blue" }} href="https://twitter.com/HungerProject"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="m-1" target="_blank" href="https://in.linkedin.com/company/freedom-from-hunger-india-trust"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a class=" m-1 text-danger" target="_blank" style={{ borderRadius: 10, }} href="https://www.youtube.com/@AbroadandHungry"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a class="m-1 text-danger " target="_blank" href="https://www.instagram.com/actionagainsthunger_india/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a>

                </div>
                <div class="col-md-5 col-lg-3 text-secondary" style={{ marginLeft: 20 }}>
                    <h3 class="col-1 m-5 text-light">Some Trusts</h3>
                    <a target="_blank" href="https://www.wfp.org/">world food Programme</a><br />
                    <a target="_blank" href="https://www.thp.org/">Care</a><br />
                    <a target="_blank" href="https://www.thp.org/">The Hunger food</a><br />
                    <a target="_blank" href="https://www.bread.org/">Bread of the World</a>

                </div>
                {/* <div class="col-1 m-5 text-light">
                    <h1>Programs</h1>
                    <p>Air Freight</p>
                    <p>Ocean Freight</p>
                    <p>Large Projects</p>

                </div> */}

                <div class="col-1 m-5 text-light">
                <h3>Register to our thrust</h3>
                        <Link to="/Registerform" className="m-3 p-3" style={{color:"blue", textDecoration:"none"}}>Register</Link>
                    <Outlet/>
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
    );
 }
 export default Layout;