import "../scss/layout/header.scss"
import header from "../images/header.png"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <Link to="/">
      <img src={header} alt="harry potter" className="header__img"/>
      </Link>
    </header>
  )
}

export default Header