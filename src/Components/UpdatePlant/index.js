import React from 'react'
import css from './CreatePlant.module.css';
//import Header from '../Header/Header';
import {useState} from 'react';
import {useEffect} from 'react';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { redirect } from "react-router-dom";


function Update () {


  const [plant, setPlant] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

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

  const [name, setName] = useState(plant.name);
  const [watering, setWatering] = useState(plant.watering);
  const [sunlight, setSunlight] = useState(plant.sunlight);
  const [careNotes, setCareNotes] = useState(plant.careNotes);
  const [image, setImage] = useState(plant.image);
  const [message, setMessage] = useState("");;
  // const [name, setName] = useState("");
  // const [watering, setWatering] = useState("");
  // const [sunlight, setSunlight] = useState("");
  // const [careNotes, setCareNotes] = useState("");
  // const [image, setImage] = useState("");
  //const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {


      let res = await fetch(`http://localhost:3000/api/v1/plants/update/${id}`, {
        mode: 'cors',
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
            name: name,
            watering: watering,
            sunlight: sunlight,            
            careNotes: careNotes,
            image: image
        }),      
    
      });
     
      //let resJson = await res.json();
      //console.log(resJson)
      if (res.status === 200) {
        console.log('the name');
        console.log(name)
        // setName("");
        // setSunlight("");
        // setWatering("");
        // setImage("");
        // setCareNotes("");
        setMessage("Plant updated successfully");
        console.log(message);
        //console.log(resJson);
        navigate(`/plantPage/${id}`);
        setMessage("Plant updated successfully");
        console.log(message);
      } else {
        setMessage("Some error occured");
        console.log("Message")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    
    {/* <Header></Header> */}
    <div className={css.page}>
    <div className={css.wrapper}>
   
    <h1 className={css.title}>{`Update ${plant.name}` }</h1>
    {plant?
    <form className={css.form} onSubmit={handleSubmit}>
       <label>
    Name: <input
          type="text"
          value={name}
          placeholder={plant.name}
          onChange={(e) => setName(e.target.value)}
         
          className={css.field} />
          </label>
          <label>
    Sunlight:  <input  
          type="text"
          value={sunlight}
          placeholder={plant.sunlight}
          onChange={(e) => setSunlight(e.target.value)}
         
          className={css.field} />
          </label>
          <label>
    Watering: 
           <input  
          type="text"
          value={watering}
          placeholder={plant.watering}
          onChange={(e) => setWatering(e.target.value)}
         
          className={css.field} />
          </label>
          <label>
    Care Notes: 
           <input  
          type="text"
          value={careNotes}
          placeholder={plant.careNotes}
          onChange={(e) => setCareNotes(e.target.value)}
         
          className={css.field} />
          </label>
          <label>
    Image: 
           <input  
          type="text"
          value={image}
          placeholder={plant.image}
          onChange={(e) => setImage(e.target.value)}
         
          className={css.field} />
          </label>
      
          <button type="submit" class={css.submit}>Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>: "error"}
</div>
</div>
</>
  )
}

export default Update;

