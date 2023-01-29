import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oups!</h1>
      <p>la page que vous demandez n'hexiste pas.</p>
      <p>
        <a href='app.js'>retourner sur la page d'accueil</a>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}