import { Link } from 'react-router-dom'
import './navBar.css'

function NavBar () {
  return (
    <header className='navBarContainer'>
      <ul className='navBarUl'>
        <li>
          <Link to='/home'> Inicio </Link>
        </li>
        <li>
          <Link to='/SearchName'> Recetas </Link>
        </li>
        <li>
          <Link to='/menu'> Menus </Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar
