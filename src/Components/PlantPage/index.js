import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const PlantPage = () => {
  const [plant, setPlant] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/api/v1/plants/plantpage/${id}`
      );
      const data = await response.json();
      console.log(data);
      setPlant(data);
    }
    fetchData();
  }, [id]);

  return (

   <div>
    {plant?
    <div>
        <h1>{plant.name}</h1>
        <p>{plant.watering}</p>
        <p>{plant.sunlight}</p>
        <p>{plant.careNotes}</p>
        <a href={plant.image}></a>
    </div>
    : "error no plant found"}
    </div>
  )
}

export default PlantPage