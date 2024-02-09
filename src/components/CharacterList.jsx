import CharacterCard from "./CharacterCard"

function CharacterList({characters}) {
    const rederCharacters = characters.map((character) => {
        return <li key={character.id}>
            <CharacterCard character={character}/>
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