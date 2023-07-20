import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";


function Error() {
  return (
    <div>
      <Header />
      <div className="errorPage">
        <h1 className="errorPage__404">404</h1>
        <p className="errorPage__content">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="errorPage__link">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Error;
