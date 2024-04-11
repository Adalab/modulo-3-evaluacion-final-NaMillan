import '../../scss/layout/filter.scss'
import PropTypes from "prop-types";

function FilterByHouse({handleFilterHouse, filterHouse}) {

 
  return (
    <div className="inputGroup">

        <label className="find" htmlFor="HouseFilter">Buscar por casa:</label>
    
    <select className="findCharacter" id="HouseFilter" value={filterHouse} onChange= {(ev) =>handleFilterHouse(ev.target.value)}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
  </select>
 
    </div>
  )
}
FilterByHouse.propTypes = {
  handleFilterHouse: PropTypes.func.isRequired,
  filterHouse: PropTypes.string.isRequired,
}

export default FilterByHouse