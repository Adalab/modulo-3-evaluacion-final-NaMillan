import "../scss/layout/footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import imgFooter from "../images/imgFooter.png"
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    return (
    <footer className="footer">
      <div onClick={scrollToTop}>
     <Link to="/">
      <img src={imgFooter} alt="Logo" className="footer__img"/>
     </Link>
      </div>
     <nav className="footer__nav">
        <p className="footer__nav--text">Contacto</p>
      <ul className="footer__nav--list">
        <li>
         <a className="footer__icon" href="https://www.linkedin.com/in/nazareth-millan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </li>
        <li>
         <a className="footer__icon" href="https://github.com/NaMillan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub}/></a>
        </li>
      </ul>
     </nav> 
    </footer>
    )
  }
  
  export default Footer