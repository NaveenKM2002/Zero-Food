import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faCamera, faCloudSunRain, faComputer, faHouseFloodWater, faMobile, faPeopleGroup, faPhotoFilm, faPieChart, faPlateWheat, faRocket, faSadCry } from "@fortawesome/free-solid-svg-icons";
import { faAngry, faCalendar } from "@fortawesome/free-regular-svg-icons";

import { useState } from "react";

const Blog = () => {
  

  return (
    <div class="container-fluid row text-center">
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
  );
};

export default Blog;
