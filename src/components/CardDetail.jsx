import '../scss/layout/cardDetail.scss'
import PropTypes from 'prop-types';
import charactersWithoutPhoto from'../../src/images/charactersWithoutPhoto.jpeg';


function CardDetail ({character}) {

    return (
        <article key={character.id} className={`cardDetail ${character.house}`}>
         <img 
         className="cardDetail_img" 
         src={character.image !== '' ? character.image: charactersWithoutPhoto}
         alt="Foto del personaje"
         title= "Foto del personaje"
         />
         <div className="cardDetail__description">
         <h2 className="cardDetail__description--name">{character.name}</h2>
         <p className="cardDetail__description--status">Estatus: {character.alive? 'Vivo' : 'Muerto'}</p>
         <p className="cardDetail__description--general">Especie: {character.species}</p>
         <p className="cardDetail__description--general">Genero: {character.gender}</p>
         <p className="cardDetail__description--house">Casa: {character.house}</p>

         {character.alternateNames?.length > 0 && (
         <p className="cardDetail__description--general">Nombres Alternativos: {character.alternateNames.join(', ')}</p>
         )}
         </div>
        </article>
      )
    }
    CardDetail.propTypes = {
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

export default CardDetail