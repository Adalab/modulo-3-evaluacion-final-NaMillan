import "../scss/App.scss"
import Header from "./Header"
import { Routes, Route } from 'react-router-dom';
import CharacterList from "./CharacterList"
import getDataFromApi from "../services/api"
import {useEffect,useState} from "react";
import Filters from "./filters/Filters";

function App() {

  const [characters,setCharacters]= useState([])
  const [filterName,setFilterName]= useState ("")
  const [filterHouse,setFilterHouse]= useState ("Gryffindor")
 
  useEffect(() => {
    getDataFromApi(filterHouse).then((cleanData) => {
      setCharacters(cleanData)
        })
  }, [filterHouse])

  const handleFilterName = (value) => {
    setFilterName (value)
  }

  //const getHouse= () => {
  //  const houses = characters.map((character) => character.house);
  //  return houses; 
  //}
  const handleFilterHouse= (value) =>{
    setFilterHouse (value)
  }

 const filterCharacters = characters.filter((character) => character.name.toLowerCase().includes(filterName.toLowerCase())
 );
 const filterHouses= characters.filter((character) => 
 character.house === filterHouse
 );
 const combinedFilter= filterName.trim() !== '' ? filterCharacters : filterHouses; 

  return (
  <>
  <Header/>
   
  <Routes>
    <Route path="/" element={
     <>
        <Filters filterName={filterName} handleFilterName={handleFilterName} /*houses={getHouse()}*/ handleFilterHouse={handleFilterHouse} />
        <CharacterList characters={combinedFilter}/>
     </>
    }/>
  </Routes>
    </>
  ); 
}

export default App
