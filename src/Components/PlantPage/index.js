import React, { useEffect, useState } from "react";
import css from "./PlantInfo.module.css";
import {useParams} from "react-router-dom";
import DeleteButton from "../DeleteButton";
import { Link } from 'react-router-dom';

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

  // const deleteUser = id => {
  //   async function fetchData() = await fetch(`http://localhost:3000/api/v1/plants/delete/${id}`, {
  //     method: "DELETE",
  //   })
//   // }
//   useEffect(() => {
//     // DELETE request using fetch inside useEffect React hook
//     fetch(`http://localhost:3000/api/v1/plants/delete/${id}`, { method: 'DELETE' })
//         .then(() => setStatus('Delete successful'));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);

  return (

   <div>
    {plant?
    <div>
    
    <div className={css.plantInfo}>
   
    <div className={css.plantContainer}>
    <h1 className={css.title}>{plant.name}</h1>
        <div className={css.plantDetails}>
        <p><span className={css.bold}>Watering:</span> {plant.watering}</p>
        <p><span className={css.bold}>Sunlight:</span> {plant.sunlight}</p>
        <p><span className={css.bold}>Care Notes:</span> {plant.careNotes}</p>
        </div>
        </div>
        <div className={css.pictureBox}>
        <img className={css.image}src={plant.image}></img>
        </div>
        <div className={css.buttons}>
        <Link to={`/update/${id}`} className='link'><DeleteButton text={`Update ${plant.name}`}></DeleteButton></Link>
        {/* <DeleteButton text={`Delete ${plant.name}`} handleClick={deleteUser}></DeleteButton> */}
        </div>
        {/* <AddButton text="Add Plant"></AddButton> */}
   
    </div>
   
    </div>
    : "error no plant found"}
    </div>
  )
}

export default PlantPage