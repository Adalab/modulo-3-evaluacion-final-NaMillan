import PropTypes from "prop-types";
import charactersWithoutPhoto from'../../src/images/charactersWithoutPhoto.jpeg';
import '../../src/scss/layout/characterList.scss'

function CharacterCard({character}) {
  return (
    <article>
     <img 
     className="card_img" 
     src={character.image !== '' ? character.image: charactersWithoutPhoto}
     alt="Foto del personaje"
     title= "Foto del personaje"
     />
     <h2 className="card_tittle">{character.name}</h2>
     <h3 className="card_tittle">{character.species}</h3>
    </article>
  )
}
CharacterCard.propTypes = {
  character: PropTypes.shape({
          id: PropTypes.string.isRequired,
          house:PropTypes.string.isRequired,
          image:PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          species: PropTypes.string.isRequired,
      })
}


export default CharacterCard