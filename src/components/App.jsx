import { useEffect, useState } from 'react'
import getDataApi from './services/Api'
import SearchName from './SearchName/SearchName'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import getUsersApi from './services/UserApi'
import NavBar from './NavBar/NavBar'
import AuthRoute from './AuthRoute/AuthRoute'
import '../css/App.css'
import AccountMenu from './Login/AccountMenu'
import MenuDisplay from './MenuDisplay/MenuDisplay'
import Register from './Login/Register'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function App () {
  //Array de recetas
  const [foods, setFoods] = useState([])
  useEffect(() => {
    getDataApi().then(cleanData => {
      setFoods(cleanData)
    })
  }, [])

  //user --> usuario conectado actual
  const [user, setUser] = useState(null)
  //listUsers --> Array de usuarios registrados (Mejorar para no guardarlo en una variable)<------X
  const [listUsers, setListUser] = useState([])
  useEffect(() => {
    getUsersApi().then(cleanListUsers => {
      setListUser(cleanListUsers)
    })
  }, [])

  //Fecha para elegir
  const [Fecha, setFecha] = useState(new Date());
  const onChange = (fecha) => {
    setFecha(fecha)
  }

  //array de menus del usuario conectado
  var [menu, setMenu] = useState()
 

  return (
    <div className='body'>
      <h1 className='webTitle'>Plan de comidas</h1>

      <DatePicker  
      selected={Fecha} 
      onChange={(fecha) => onChange(fecha)}
      monthsShown={2}
     
      />

      <AccountMenu user={user} />
      <NavBar />

      <Routes>
        <Route
          path='/home'
          element={
            <h2 className='webSubtitle'>
              Bienvenido, ¡Vamos a crear tu menú semanal!
            </h2>
          }
        />

        <Route
          path='/login'
          element={<Login listUsers={listUsers} setUser={setUser} setMenu={setMenu}/>}
        />
        <Route path='/register' element={<Register listUsers={listUsers}/>} />
        <Route
          path='/searchName'
          element={
            <AuthRoute user={user} component={<SearchName foods={foods} />} />
          }
        />
        <Route
          path='/menu'
          element={<AuthRoute user={user} component={<MenuDisplay menu={menu} />} />}
        />
      </Routes>
    </div>
  )
}

export default App
