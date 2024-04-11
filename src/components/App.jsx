import "../scss/App.scss"
import Header from "./Header"
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import CharacterList from "./CharacterList"
import getDataFromApi from "../services/api"

import {useEffect,useState} from "react";
import Filters from "./filters/Filters";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer"


function App() {

  const [characters,setCharacters]= useState([])
  const [filterName,setFilterName]= useState ("")
  const [filterHouse,setFilterHouse]= useState ("Gryffindor")
  const [error, setError] = useState('');
  const [characterError, setCharacterError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cleanData = await getDataFromApi(filterHouse);
        setCharacters(cleanData);
        setError('');
      } catch (error) {
        console.log('Contenido del error:', error);
        setError('Error al cargar datos. Por favor, inténtalo de nuevo más tarde.');
      }
    };
  
    fetchData();
  }, [filterHouse]);
 

  useEffect(() => {
      const characterInHouse = characters.some(
        (character) =>
          character.name.toLowerCase().includes(filterName.toLowerCase()) &&
          character.house === filterHouse
      );
  
      if (filterName.trim() !== '' && !characterInHouse) {
        setCharacterError('Personaje no encontrado en esta casa');
      } else {
        setCharacterError('');
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

const handleReset = (ev) => {
    ev.preventDefault();
    setFilterName('');
    setFilterHouse('Gryffindor');
   };

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
        <Filters filterName={filterName} handleFilterName={handleFilterName} filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}  characterError={characterError} handleReset={handleReset}/>
        <CharacterList characters={filteredCharacters} error={error} />
     </>
    }
    />
    <Route path="/character/:idCharacter" element={
     <>
    <CharacterDetail character={characterData} />
  {/*<NotFound error={error} characterError={characterError}/>*/}
    </> 
    } />
   </Routes>
  <Footer/>
    </>
  ); 
}

export default App
