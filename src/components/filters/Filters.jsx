import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"
import Reset from "../Reset"
import '../../scss/layout/filter.scss'
import PropTypes from "prop-types";



function Filters({filterName, handleFilterName, handleFilterHouse, filterHouse,characterError, handleReset}) {
  return (
    <section className="search">
      <h2 className="search__title">Filtrar / Buscar</h2>
    <form className="form" action="">
        <FilterByName filterName={filterName} handleFilterName={handleFilterName} characterError={characterError}/>
        <FilterByHouse handleFilterHouse={handleFilterHouse} filterHouse={filterHouse} />
        <Reset handleReset={handleReset} />
    </form>
    </section>
    
  )
}
Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleFilterName: PropTypes.func.isRequired,
  handleFilterHouse: PropTypes.func.isRequired,
  filterHouse: PropTypes.string.isRequired,
  characterError:PropTypes.string,
  handleReset:PropTypes.func.isRequired
}

export default Filters