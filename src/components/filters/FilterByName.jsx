

function FilterByName({filterName,handleFilterName}) {
  return (
    <>
    <label>
        Nombre del personaje
    </label>
    <input type="text" placeholder="Nombre del personaje" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} />
    </>
  )
}

export default FilterByName