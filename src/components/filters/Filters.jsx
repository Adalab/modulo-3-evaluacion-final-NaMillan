import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"


function Filters({filterName, handleFilterName, handleFilterHouse, filterHouse}) {
  return (
    <form action="">
        <h2>Busca por personaje:</h2>
        <FilterByName filterName={filterName} handleFilterName={handleFilterName}/>
        <FilterByHouse handleFilterHouse={handleFilterHouse} filterHouse={filterHouse} />
    </form>
  )
}

export default Filters