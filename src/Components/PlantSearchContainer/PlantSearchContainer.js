import React, { useEffect, useState } from "react";
//import Resource from "../Resource/Resource";
import css from './PlantSearchContainer.module.css'
import Plant from "../Plant";


function PlantSearchContainer({plantInfo}){

  const [plants, setPlants] = useState(null);

useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `api/v1/plants/plant/${plantInfo}`
      );
      const data = await response.json();
      console.log(data);
      setPlants(data);
    }
    fetchData();
  }, [plantInfo]);

  console.log(`search planst" ${plants}`)

  return (
  <div className={css.resourceContainer}>
  {plants
      ? plants.map((plant) => {
          return <Plant name={plant.name} image={plant.image} />;
        })
      : `No results found`}
</div>
  )
}

export default PlantSearchContainer;