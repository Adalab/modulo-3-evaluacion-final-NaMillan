import '../../scss/layout/filter.scss'
import PropTypes from "prop-types";
import NotFound from "../NotFound" 


function FilterByName({filterName,handleFilterName,characterError}) {
  return (
    <div className="inputGroup">
    <label className="find" htmlFor="searchInput">
        Buscar por nombre:
    </label>
    <input id="searchInput" className="findCharacter" type="text" placeholder="Ej.Harry" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} />
    {characterError && <NotFound characterError={characterError} />} 
    </div>
  )
}
FilterByName.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleFilterName: PropTypes.func.isRequired,
  characterError:PropTypes.string
 }

export default FilterByName