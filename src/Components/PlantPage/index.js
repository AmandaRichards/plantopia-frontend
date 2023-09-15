import React, { useEffect, useState } from "react";

const PlantPage = ({id}) => {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `api/v1/plants/plant/${id}`
      );
      const data = await response.json();
      console.log(data);
      setPlant(data);
    }
    fetchData();
  }, [id]);

  return (

   
    //get plant by id?
    plant?
    <div>
        <h1>{plant.name}</h1>
        <p>{watering}</p>
        <p>{sunlight}</p>
        <p>{careNotes}</p>
        <a href={image}></a>
    </div>
    : "error no plant found"
  )
}

export default PlantPage