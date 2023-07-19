import Logo from "../assets/LOGO.svg";

function Header() {
  return (
    <div className="header">
        <img src={Logo} className="Kasa-logo" alt="logo"/>
        <ul className="navBar">
            <li>Accueil</li>
            <li>A propos</li>
        </ul>
    </div>
  )
}

export default Header