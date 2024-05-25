import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
        <ul>
            <li><Link to="/"> Inicio </Link></li>
            <li><Link to="/login"> Inisiar sesión </Link></li>
            {/* <li><Link to="/profile"> Perfil de usuario </Link></li> */}
            <li><Link to="/SearchName"> Opciones de menú </Link></li>
        </ul>
    </header>
  )
}

export default NavBar;
