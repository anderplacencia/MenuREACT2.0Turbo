import { Link } from "react-router-dom";
import "../../css/navBar.css"

function NavBar() {
  return (
    <header className="navBarContainer">
        <ul className="navBarUl">
            <li><Link to="/"> Inicio </Link></li>
            <li><Link to="/login"> Login </Link></li>
            <li><Link to="/SearchName"> Recetas </Link></li>
        </ul>
    </header>
  )
}

export default NavBar;
