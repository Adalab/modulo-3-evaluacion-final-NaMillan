import CharacterCard from "./CharacterCard"
import { Link } from "react-router-dom"
import '../../src/scss/layout/characterList.scss'
import PropTypes from "prop-types";

function CharacterList({characters}) {
    const rederCharacters = characters.map((character) => {
        return <li className="card" key={character.id}>
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
}

export default CharacterList