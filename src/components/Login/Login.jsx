import { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

function Login ({ setUser, listUsers }) {
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

    if (findUser) {
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
