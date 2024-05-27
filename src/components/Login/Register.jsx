import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import postUser from '../services/Post/userPost'
import "./register.css"

function Register ({ listUsers }) {
  const [userRegister, setUserRegister] = useState({})
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const handleInput = ev => {
    const id = ev.target.id
    setUserRegister({ ...userRegister, [id]: ev.target.value })
  }

  const handleClick = ev => {
    ev.preventDefault()
    const findUser = listUsers.find(user => user.email === userRegister.email)

    //Si existe el usuario se deniega la petición
    if (!userRegister.email) {
      setErrorMessage('Introduzca email')
    } else if (findUser) {
      setErrorMessage('Ya existe ese usuario')
    } else if (!userRegister.password) {
      setErrorMessage('introduzca una contraseña')
    } else if (!userRegister.name) {
      setErrorMessage('introduzca un nombre')
    } else {
      setErrorMessage('')
      //console.log("datos a cargar: ",userRegister)
      //post de userRegister a la api
      postUser(listUsers, userRegister)
      //Se recarga la web para actualizar listUsers
      navigate("/login")
    }
  }

  return (
    <form onChange={handleInput} className='registerContainer'>
      <p>Registrarse</p>
      <div className='inputRow'>
        <label htmlFor=''> Nombre: </label>
        <input type='text' id='name' />
      </div>

      <div className='inputRow'>
        <label htmlFor=''> Email: </label>
        <input type='text' id='email' />
      </div>

      <div className='inputRow'>
        <label htmlFor=''> Password: </label>
        <input type='password' id='password' />
      </div>

      <p className='errors'>{errorMessage}</p>
      <input
        type='submit'
        value='Registrarse'
        onClick={handleClick}
        className='loginButton'
      />
    </form>
  )
}

export default Register
