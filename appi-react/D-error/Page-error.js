import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from './Navbar/navbar'
export default function ErrorPage() 
  const error = useRouteError();
  console.error(error);

  return (
    <div id ="error-page">
      <h1>Oups!</h1>
      <p>la page que vous demandez n'hexiste pas.</p>
      <nav>
        <Navbar/>
        <Link to="/">retournez sur la page d'accueil</Link> 
        <i>{error.statusText || error.message}</i>
      </nav>

    </div>
  );

/*function Error() {
    return (
        <div>
            <h1>Oups  Cette page n'existe pas</h1>
        </div>
    )
}
 
export default Error*/
