import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"


function Filters({filterName, handleFilterName, handleFilterHouse, filterHouse, error}) {
  return (
    <form action="">
        <h2>Busca por personaje:</h2>
        <FilterByName filterName={filterName} handleFilterName={handleFilterName} error={error}/>
        <FilterByHouse handleFilterHouse={handleFilterHouse} filterHouse={filterHouse} error={error} />
    </form>
  )
}

export default Filters