import CharacterCard from "./CharacterCard"
import { Link } from "react-router-dom"
import '../../src/scss/layout/characterList.scss'
import NotFound from "./NotFound";
import PropTypes from "prop-types";


function CharacterList({characters, error}) {
    if (error) {
        return <NotFound error={error} />;
      }
    const rederCharacters = characters.map((character) => {
        return <li key={character.id}>
            <Link to={`/character/${character.id}`}>
            <CharacterCard character={character}/>
            </Link>
        </li>
    })
  
  return (
    <section className="section">
        <ul className="list">
            {rederCharacters}
        </ul>
        </section>
   
  )
}
CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            house:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            name: PropTypes.string.isRequired, 
        })
    ).isRequired,
    error: PropTypes.string
}

export default CharacterList