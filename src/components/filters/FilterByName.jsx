import '../../scss/layout/filter.scss'

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

export default FilterByName