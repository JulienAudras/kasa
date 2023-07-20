import Logo from "../assets/LOGO.svg";
import Logo_mobile from "../assets/LOGO_mobile.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <img src={Logo} className="header__logo" alt="logo"/>
        <img src={Logo_mobile} className="header__logo_mobile" alt="logo"/>
        <ul className="header__navBar">
            <li className="header__navBar--li">
              <NavLink to="/" className="header__navBar--li--link">Accueil</NavLink>
            </li>
            <li className="header__navBar--li">
              <NavLink to="/about" className="header__navBar--li--link">A Propos</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header