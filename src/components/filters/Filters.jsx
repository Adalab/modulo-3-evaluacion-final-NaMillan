import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"
import '../../scss/layout/filter.scss'


function Filters({filterName, handleFilterName, handleFilterHouse, filterHouse, error}) {
  return (
    <form className="form" action="">
        <FilterByName filterName={filterName} handleFilterName={handleFilterName} error={error}/>
        <FilterByHouse handleFilterHouse={handleFilterHouse} filterHouse={filterHouse} error={error} />
    </form>
  )
}

export default Filters