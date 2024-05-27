//Listado de menus del usuario

const getUserMenu = async user => {
  const userMenuLink =
    'https://6651a54620f4f4c442784587.mockapi.io/user/' + user.id + '/menu'

  const response = await fetch(userMenuLink)
  const res = await response.json()
  return res
}

export default getUserMenu
