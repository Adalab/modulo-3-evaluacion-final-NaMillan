import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"
import '../../scss/layout/filter.scss'
import PropTypes from "prop-types";



function Filters({filterName, handleFilterName, handleFilterHouse, filterHouse,characterError}) {
  return (
    <section className="search">
      <h2 className="search__title">Filtrar / Buscar</h2>
    <form className="form" action="">
        <FilterByName filterName={filterName} handleFilterName={handleFilterName} characterError={characterError}/>
        <FilterByHouse handleFilterHouse={handleFilterHouse} filterHouse={filterHouse} />
    </form>
    </section>
    
  )
}
Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleFilterName: PropTypes.func.isRequired,
  handleFilterHouse: PropTypes.func.isRequired,
  filterHouse: PropTypes.string.isRequired,
  characterError:PropTypes.string
}

export default Filters