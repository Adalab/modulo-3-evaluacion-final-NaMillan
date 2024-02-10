import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"


function Filters({filterName, handleFilterName, handleFilterHouse}) {
  return (
    <form action="">
        <h2>Busca por personaje:</h2>
        <FilterByName filterName={filterName} handleFilterName={handleFilterName}/>
        <FilterByHouse handleFilterHouse={handleFilterHouse} />
    </form>
  )
}

export default Filters