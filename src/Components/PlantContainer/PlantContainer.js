import React, { useEffect, useState } from "react";
import css from "./PlantContainer.module.css";
import Plant from "../Plant";


function PlantContainer({plant}) {

const [plants, setPlants] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `api/v1/plants`
      );
      const data = await response.json();
      console.log(data)
      setPlants(data);
    }
    fetchData();
  }, []);
  console.log(plants);


  return (
    <div className={css.subjectContainer}>
      
      {plants
          ? plants.map((plant) => {
              return <Plant name={plant.name} image={plant.image} id={plant.id}/>;
            })
          : `Loading Data...`}
    </div>
     
  )
}


  export default PlantContainer;
  //Link={subject.name.toLowerCase()} 