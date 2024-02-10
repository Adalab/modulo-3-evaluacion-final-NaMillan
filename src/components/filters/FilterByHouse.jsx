

function FilterByHouse({handleFilterHouse}) {

 
  return (
    <div>

        <label htmlFor="HouseFilter">Selecciona la casa:</label>
    
    <select id="HouseFilter" onChange= {(ev) =>handleFilterHouse(ev.target.value)}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
  </select>
    </div>
  )
}

export default FilterByHouse