import { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import getUserMenu from '../services/getMenu';

function Login ({ setUser, listUsers , setMenu}) {
  const [userLogin, setUserLogin] = useState({})
  const navigate = useNavigate();

  const handleInput = ev => {
    const id = ev.target.id
    setUserLogin({ ...userLogin, [id]: ev.target.value })
  }

  const handleClick = ev => {
    ev.preventDefault()
    const findUser = listUsers.find(
      user =>
        user.email === userLogin.email && user.password === userLogin.password
    )

    //Usuario y pass correctos:
    if (findUser) {      
      //funcion asincrona para llamar a la info del menu
      const getMenuApi = async() => {
      setMenu( await getUserMenu(findUser))
      }
      getMenuApi()

      //Se da valor del usuario logeado
      setUser(findUser)
      navigate("/SearchName")
    }
  }

  return (
    <form onChange={handleInput} className='loginContainer'>

      <div className='inputRow'>
        <label htmlFor=''> Email: </label>
        <input type='text' id='email' />
      </div>

      <div className='inputRow'>
        <label htmlFor=''> Password: </label>
        <input type='password' id='password' />
      </div>

      <input type='submit' value='Inicia sesión' onClick={handleClick} className='loginButton'/>
    </form>
  )
}

export default Login
