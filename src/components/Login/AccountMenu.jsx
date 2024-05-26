import { Link } from 'react-router-dom'
import './accountMenu.css'

function AccountMenu (user) {
  console.log(user)
  return (
    <div className='accountContainer'>
      {!user.user && (
        <p>
          <Link to='/login' className='accountLink'>
            {' '}
            Accede{' '}
          </Link>
          o
          <Link to='/Register' className='accountLink'>
            {' '}
            Regístrate
          </Link>
        </p>
      )}
      {user.user !== null && (
        <input
          type='submit'
          value='Cerrar sesion'
          onClick={() => window.location.reload()}
          className='accountLink'
        />
      )}
    </div>
  )
}

export default AccountMenu
