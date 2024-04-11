import "../scss/layout/footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faSquareGithub} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
      <footer className="footer">
        <p className="footer__text">Contacto</p>
        <a className="footer__icon" href="https://www.linkedin.com/in/nazareth-millan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a className="footer__icon" href="https://github.com/NaMillan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub}/></a>
      </footer>
    )
  }
  
  export default Footer