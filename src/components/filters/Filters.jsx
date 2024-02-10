import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"


function Filters({filterName,handleFilterName,/*houses*/ handleFilterHouse}) {
  return (
    <form action="">
        <h2>Busca por personaje:</h2>
        <FilterByName filterName={filterName} handleFilterName={handleFilterName}/>
        <FilterByHouse /*houses={houses}*/ handleFilterHouse={handleFilterHouse} />
    </form>
  )
}

export default Filters