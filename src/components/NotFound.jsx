import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import '../scss/layout/notFound.scss'

function NotFound({error, characterError}) {
  return (
    <section className="notFound">
      {error && <p>{error}</p>}
      {characterError && <p>{characterError}</p>}
     </section>
    );
}

NotFound.propTypes = {
  error: PropTypes.string,
  characterError:PropTypes.string
}

export default NotFound;