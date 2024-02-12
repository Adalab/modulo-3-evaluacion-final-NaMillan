import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import '../../src/scss/layout/characterList.scss'

function CharacterDetail({character}) {
    return (
        <div className="card">
         <img 
         className="card_img" 
         src={character.image !== '' ? character.image:'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter' }
         alt="Foto del personaje"
         title= "Foto del personaje"
         />
         <h2 className="card_tittle">{character.name}</h2>
         <h3>Estatus: {character.alive? 'Vivo' : 'Muerto'}</h3>
         <h3 className="card_species">Especie: {character.species}</h3>
         <h3>Genero: {character.gender}</h3>
         <h3>Casa: {character.house}</h3>

         {character.alternateNames?.length > 0 && (
         <h3>Nombres Alternativos: {character.alternateNames.join(', ')}</h3>
         )}

         <Link to="/" className="volver">Volver</Link>
        </div>
      )
    }
    CharacterDetail.propTypes = {
      character: PropTypes.shape({
              id: PropTypes.string.isRequired,
              house:PropTypes.string.isRequired,
              image:PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              species: PropTypes.string.isRequired,
              alive:PropTypes.bool.isRequired,
              alternateNames:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
              gender:PropTypes.string.isRequired,
          })
    }

export default CharacterDetail