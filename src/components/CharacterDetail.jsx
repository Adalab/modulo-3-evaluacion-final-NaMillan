import { Link } from "react-router-dom"

function CharacterDetail({character}) {
    return (
        <div>
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

export default CharacterDetail