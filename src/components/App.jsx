import "../scss/App.scss"
import Header from "./Header"
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import CharacterList from "./CharacterList"
import getDataFromApi from "../services/api"
import {useEffect,useState} from "react";
import Filters from "./filters/Filters";
import CharacterDetail from "./CharacterDetail";

function App() {

  const [characters,setCharacters]= useState([])
  const [filterName,setFilterName]= useState ("")
  const [filterHouse,setFilterHouse]= useState ("Gryffindor")
  const [error, setError] = useState('');
 
  useEffect(() => {
       getDataFromApi(filterHouse).then((cleanData) => {
      setCharacters(cleanData)
    })
    }, [filterHouse])
  
  useEffect(() => {
      const characterInHouse = characters.some(
        (character) =>
          character.name.toLowerCase().includes(filterName.toLowerCase()) &&
          character.house === filterHouse
      );
  
      if (filterName.trim() !== '' && !characterInHouse) {
        setError('Personaje no encontrado en esta casa');
      } else {
        setError('');
      }
    }, [filterName, filterHouse, characters]);


    const handleFilterName = (value) => {
    setFilterName (value);

  };

  
  const handleFilterHouse= (value) =>{
    setFilterHouse (value)
  };

  
  const filteredCharacters = characters
  .filter((character) => character.name.toLowerCase().includes(filterName.toLowerCase())
  )
  .filter((character) => 
  character.house === filterHouse
  )

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
        <Filters filterName={filterName} handleFilterName={handleFilterName} filterHouse={filterHouse} handleFilterHouse={handleFilterHouse} error={error}/>
        <CharacterList characters={filteredCharacters}/>
     </>
    }/>
    <Route path="/character/:idCharacter" element={<CharacterDetail character={characterData}/>} />
  </Routes>
    </>
  ); 
}

export default App
