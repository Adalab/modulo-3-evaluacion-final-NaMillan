const getDataFromApi = (house) => {
    return fetch (`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then ((response) => response.json())
    .then ((data) => {
     const cleanData = data.map((character) => {
        return{
            id:character.id,
            image:character.image,
            name:character.name,
            species:character.species,
            house:character.house,
            gender:character.gender,
            alternateNames:character.alternate_names,
            alive:character.alive,
        };
      });
      return cleanData;
     });    
    };

    export default getDataFromApi