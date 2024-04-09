import '../../scss/layout/filter.scss'
import PropTypes from "prop-types";
import NotFound from "../NotFound" 


function FilterByName({filterName,handleFilterName,characterError}) {
  return (
    <div className="input-group">
    <label className="find">
        Busca por personaje:
    </label>
    <input className="findCharacter" type="text" placeholder="Nombre del personaje" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} />
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