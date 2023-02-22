import  './error.scss';
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="Error">
            <h1 className="error404"><b>404</b></h1>
            <h2 className="Oups">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="return">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error