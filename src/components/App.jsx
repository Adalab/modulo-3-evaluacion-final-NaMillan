import "../scss/App.scss"
import Header from "./Header"
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import CharacterList from "./CharacterList"
import getDataFromApi from "../services/api"
import {useEffect,useState} from "react";
import Filters from "./filters/Filters";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";

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

  const handleFilterHouse= (value) =>{
    setFilterHouse (value)
  }

 const filterCharacters = characters.filter((character) => character.name.toLowerCase().includes(filterName.toLowerCase())
 );
 const filterHouses= characters.filter((character) => 
 character.house === filterHouse
 );
 const combinedFilter= filterName.trim() !== '' ? filterCharacters : filterHouses; 


 const { pathname } = useLocation();
 const routeData = matchPath("/character/:idCharacter",pathname)
 const idCharacter = routeData != null ? routeData.params.idCharacter : null;
 const characterData =characters.find((character) => character.id ===idCharacter)



  return (
  <>
  <Header/>
   
  <Routes>
    <Route path="/" element={
     <>
        <Filters filterName={filterName} handleFilterName={handleFilterName} filterHouse={filterHouse} handleFilterHouse={handleFilterHouse} />
        <CharacterList characters={combinedFilter}/>
     </>
    }/>
    <Route path="/character/:idCharacter" element={<CharacterDetail character={characterData}/>} />
  </Routes>
    </>
  ); 
}

export default App
