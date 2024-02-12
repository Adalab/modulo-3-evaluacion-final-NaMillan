import '../../scss/layout/filter.scss'
import PropTypes from "prop-types";

function FilterByName({filterName,handleFilterName, error}) {
  return (
    <div className="input-group">
    <label className="find">
        Busca por personaje:
    </label>
    <input className="findCharacter" type="text" placeholder="Nombre del personaje" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} />
    {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  )
}
FilterByName.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleFilterName: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default FilterByName