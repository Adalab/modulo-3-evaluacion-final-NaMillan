import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"
import '../../scss/layout/filter.scss'
import PropTypes from "prop-types";


function Filters({filterName, handleFilterName, handleFilterHouse, filterHouse, error}) {
  return (
    <form className="form" action="">
        <FilterByName filterName={filterName} handleFilterName={handleFilterName} error={error}/>
        <FilterByHouse handleFilterHouse={handleFilterHouse} filterHouse={filterHouse} error={error} />
    </form>
  )
}
Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleFilterName: PropTypes.func.isRequired,
  handleFilterHouse: PropTypes.func.isRequired,
  filterHouse: PropTypes.string.isRequired,
  error: PropTypes.string,
}

export default Filters