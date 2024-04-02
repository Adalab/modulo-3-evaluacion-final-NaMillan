import "../scss/layout/footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
      <footer className="footer">
        <p className="footer__text">Para saber más</p>
        <a className="footer__icon" href="https://www.linkedin.com/in/nazareth-millan"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </footer>
    )
  }
  
  export default Footer