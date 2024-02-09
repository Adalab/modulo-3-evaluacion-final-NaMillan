import "../scss/App.scss"
import Header from "./Header"
import { Routes, Route } from 'react-router-dom';
import CharacterList from "./CharacterList"
import getDataFromApi from "../services/api"
import {useEffect,useState} from "react";
import Filters from "./filters/Filters"

function App() {

  const [characters,setCharacters]= useState([])
  const [filterName,setFilterName]= useState ("")
  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacters(cleanData)
        })
  }, [])

  const handleFilterName = (value) => {
    setFilterName (value)
  }

   

  return (
  <>
  <Header/>
   
  <Routes>
    <Route path="/" element={
     <>
        <Filters filterName={filterName} handleFilterName={handleFilterName} />
        <CharacterList characters={characters}/>
     </>
    }/>
  </Routes>
    </>
  ); 
}

export default App
