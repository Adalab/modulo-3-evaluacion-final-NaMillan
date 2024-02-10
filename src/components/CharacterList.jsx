import CharacterCard from "./CharacterCard"
import { Link } from "react-router-dom"

function CharacterList({characters}) {
    const rederCharacters = characters.map((character) => {
        return <li key={character.id}>
            <Link to={`/character/${character.id}`}>
            <CharacterCard character={character}/>
            </Link>
        </li>
    })
  
  return (
    <section>
        <ul>
            {rederCharacters}
        </ul>
        </section>
   
  )
}

export default CharacterList