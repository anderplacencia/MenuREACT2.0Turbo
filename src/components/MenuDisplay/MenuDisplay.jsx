import Menu from './Menu'
import "./menuDisplay.css"

function MenuDisplay (menu) {
  //console.log("menudisplay:",menu)

  //item --> array de menus .menu[{id,name, plan[], userId}]
  var menuHtml = menu.menu.map((item, i) => (
    <li key={i}>
      {' '}
      <Menu data={item} />{' '}
    </li>
  ))
  if (!menuHtml) {
    menuHtml = 'nada para mostrar'
  }
  return <div className='menuArrayContainer'>
  <h2 className='menuDisplayTitle'>Mis menus:</h2>
  {menuHtml}</div>
}

export default MenuDisplay
