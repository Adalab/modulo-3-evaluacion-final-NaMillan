import "../scss/layout/header.scss"
import header from "../images/header.png"


function Header() {
  return (
    <header className="header">
      <img src={header} alt="harry potter" className="header__img"/>
    </header>
  )
}

export default Header