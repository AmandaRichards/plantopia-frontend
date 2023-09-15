//import logo from './logo.svg';
import monstera from './monstera.webp';
import Plant from './Components/Plant/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from 'react';
import PlantContainer from './Components/PlantContainer/PlantContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import PlantSearchContainer from './Components/PlantSearchContainer/PlantSearchContainer';
import AddButton from './Components/AddButton/AddButton';
import { Link } from 'react-router-dom'

function App() {

const [plantInfo, setPlantInfo] = useState("");
const [subject, setSubject] = useState("");

function handleClick(){
  setPlantInfo(subject)
  console.log(plantInfo)
  
}
function handleChange(e){
  setPlantInfo("")
  setSubject(e.target.value)
}
function onCLick(){

}
  return (
    <div className="App">
      <header className="App-header">      
        <h1>
          Plantopia
          
        </h1>
        </header>
        <p className="sub-heading">
        Grow your indoor forest
        </p>

   <SearchBar handleChange={handleChange} handleClick={handleClick} plantInfo={plantInfo}></SearchBar>
   <Link to="/create" className='link'><AddButton text="Add Plant"></AddButton></Link>
   <body>
     {plantInfo? <PlantSearchContainer plantInfo={plantInfo}></PlantSearchContainer>:
     <PlantContainer ></PlantContainer>
     }
    </body>
      
    </div>
  );
}

export default App;
