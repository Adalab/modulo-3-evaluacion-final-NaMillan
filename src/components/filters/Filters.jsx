import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"


function Filters({filterName,handleFilterName}) {
  return (
    <form action="">
        <h2>Busca por personaje</h2>
        <FilterByName filterName={filterName} handleFilterName={handleFilterName}/>
        <FilterByHouse/>
    </form>
  )
}

export default Filters