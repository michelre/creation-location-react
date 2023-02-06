import { Link } from "react-router-dom";

export default function Error(){


  return (
    <div id ="error-page">
      <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={'/'}>Retourner sur la page d’accueil</Link>

    </div>
  );
}

/*function Error() {
    return (
        <div>
            <h1>Oups  Cette page n'existe pas</h1>
        </div>
    )
}

export default Error*/
