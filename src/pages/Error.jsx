import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <div className="errorPage">
        <h1 className="errorPage__404">404</h1>
        <p className="errorPage__content">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="errorPage__link">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error;
