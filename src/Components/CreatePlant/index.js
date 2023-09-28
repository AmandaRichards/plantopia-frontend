import React from 'react'
import css from './CreatePlant.module.css';
//import Header from '../Header/Header';
import {useState} from 'react';

function Create () {

  const [name, setName] = useState("");
  const [watering, setWatering] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [careNotes, setCareNotes] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //let form = new FormData();

      //form.append("name", name);
    //   form.append("watering", watering);
    //   form.append("sunlight", sunlight);
    //   form.append("careNotes", careNotes);
    //   form.append("image", image);

      let res = await fetch(`api/v1/plants/plant`, {
        mode: 'cors',
        method: "POST",
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
     
      let resJson = await res.json();
      //console.log(resJson)
      if (res.status === 200) {
        console.log('the name');
        console.log(name)
        setName("");
        setSunlight("");
        setWatering("");
        setImage("");
        setCareNotes("");
        setMessage("Plant created successfully");
        console.log(resJson);
        
      } else {
        setMessage("Some error occured");
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
    <h1 className={css.title}>Add a New Plant</h1>
    <p>{name}</p>
    
    <form className={css.form} onSubmit={handleSubmit}>
        <input  
          type="text"
          value={name}
          placeholder="Name" 
          onChange={(e) => setName(e.target.value)}
         
          className={css.field} />
           <input  
          type="text"
          value={sunlight}
          placeholder="Sunlight" 
          onChange={(e) => setSunlight(e.target.value)}
         
          className={css.field} />
           <input  
          type="text"
          value={watering}
          placeholder="Watering" 
          onChange={(e) => setWatering(e.target.value)}
         
          className={css.field} />
           <input  
          type="text"
          value={careNotes}
          placeholder="CareNotes" 
          onChange={(e) => setCareNotes(e.target.value)}
         
          className={css.field} />
           <input  
          type="text"
          value={image}
          placeholder="Image URL" 
          onChange={(e) => setImage(e.target.value)}
         
          className={css.field} />
      
        <button type="submit" class={css.submit}>Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
</div>
</div>
</>
  )
}

export default Create;

