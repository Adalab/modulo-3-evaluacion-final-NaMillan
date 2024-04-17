import CharacterCard from "./CharacterCard"
import { Link } from "react-router-dom"
import '../../src/scss/layout/characterList.scss'
import NotFound from "./NotFound";
import PropTypes from "prop-types";



function CharacterList({characters, error,characterError}) {
    if (error) {
        return <NotFound error={error}/>;
      }
      let content = null;
      if (characters.length > 0) {
        content = characters.map((character) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </li>
        ));
      } else {
        content = <NotFound characterError={characterError} />;
      }
    
      return (
        <section className="section">
          <ul className="list">{content}</ul>
        </section>
      );
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
    error: PropTypes.string,
    characterError: PropTypes.string,
}

export default CharacterList