import { Link } from "react-router-dom";
import './error.css'

export default function Error(){


  return (
    <div className="error-page">
      <h1 className="file">404</h1>
        <p className="no-file">Oups! La page que vous demandez n'existe pas.</p>
        <Link to={'/'} className="return">Retourner sur la page d’accueil</Link>

    </div>
  );
}

