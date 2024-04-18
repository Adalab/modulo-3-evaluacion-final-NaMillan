import { Link } from "react-router-dom"
import CardDetail from "./CardDetail";
import PropTypes from "prop-types";


function CharacterDetail({character}) {
  return character ? (
    <div className="characterDetail">
      <CardDetail character={character} />
      <Link to="/">
        <button className="detailPage__btn">Volver</button>
      </Link>
    </div>
  ) : null;
}
CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    alive: PropTypes.bool.isRequired,
    alternateNames: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterDetail