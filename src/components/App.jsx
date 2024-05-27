import { useEffect, useState } from 'react'
import getDataApi from './Api'
import SearchName from './SearchName/SearchName'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import getUsersApi from './UserApi'
import NavBar from './NavBar/NavBar'
import AuthRoute from './AuthRoute/AuthRoute'
import '../css/App.css'
import AccountMenu from './Login/AccountMenu'
import MenuDisplay from './MenuDisplay/MenuDisplay'
import Register from './Login/Register'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function App () {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    getDataApi().then(cleanData => {
      setFoods(cleanData)
    })
  }, [])

  const [user, setUser] = useState(null)
  const [listUsers, setListUser] = useState([])
  useEffect(() => {
    getUsersApi().then(cleanListUsers => {
      setListUser(cleanListUsers)
    })
  }, [])

  const [Fecha, setFecha] = useState(new Date());

  
  const onChange = (fecha) => {
    setDate(fecha);
  }

  return (
    <div className='body'>
      <h1 className='webTitle'>Plan de comidas</h1>

      <DatePicker  
      selected={Fecha} 
      onChange={(fecha) => onchange(fecha)}
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
          element={<Login listUsers={listUsers} setUser={setUser} />}
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
          element={<AuthRoute user={user} component={<MenuDisplay />} />}
        />
      </Routes>
    </div>
  )
}

export default App
