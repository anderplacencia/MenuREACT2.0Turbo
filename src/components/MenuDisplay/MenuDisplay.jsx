function MenuDisplay() {

  //esta null hasta que se haga el getmenus
var menuHtml = null
    //var menuHtml = menu.map((item, i) => <li key={i}> <Food data={item}/> </li>)
  if (!menuHtml) {
      menuHtml = "nada para mostrar"
    }  
  return (
    <ul className="searchNameContainer">
        {menuHtml}
    </ul>
  )
}

export default MenuDisplay
