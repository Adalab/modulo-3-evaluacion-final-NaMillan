

function FilterByName({filterName,handleFilterName, error}) {
  return (
    <>
    <label>
        Nombre del personaje
    </label>
    <input type="text" placeholder="Nombre del personaje" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} />
    {error && <div style={{ color: 'red' }}>{error}</div>}
    </>
  )
}

export default FilterByName