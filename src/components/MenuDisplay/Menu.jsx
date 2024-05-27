import MenuDay from './MenuDay'

//data --> objeto menu{id,name, plan[], userId}
function Menu ({ data }) {
  //console.log('entrando en Menu:', data)

//data= objeto de menu con los dias, que son ayyays de objetos de Food
// {lunes:[{objeto Food},{},...],Martes:[{}...],...}
  var menuHtml = Object.entries(data.plan).map(([key, value]) => {
    return <div className="menuDayContainer" key={key}><h5 className='dayDisplay'>{key}</h5> <MenuDay data={value} /></div>
})

  if (!menuHtml) {
    menuHtml = '-'
  }

  return (
    <section className='menuContainer'>
    <div className='menuHeader'>
    <div>
      <h3 className='menuTitle'>Menu: {data.name}</h3>
      <h4 className='menuSubTitle'>Comidas del menu:</h4></div>
      <input type='submit' value="Delete" className='delButton'/>
      </div>
      {menuHtml}
    </section>
  )
}

export default Menu
