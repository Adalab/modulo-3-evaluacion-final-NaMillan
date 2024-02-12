import '../../scss/layout/filter.scss'

function FilterByHouse({handleFilterHouse, filterHouse}) {

 
  return (
    <div className="input-group">

        <label className="find" htmlFor="HouseFilter">Selecciona la casa:</label>
    
    <select className="findCharacter" id="HouseFilter" value={filterHouse} onChange= {(ev) =>handleFilterHouse(ev.target.value)}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
  </select>
 
    </div>
  )
}

export default FilterByHouse