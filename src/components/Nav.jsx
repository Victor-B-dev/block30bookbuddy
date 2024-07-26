import { Link } from 'react-router-dom';

const Nav = ({ token, setToken }) => {

  const logOutUser = () => {
    setToken("")
  }
  
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link><br />
        { token ? 
            <>
              <Link to='/my-account'>My Account</Link>
            <button onClick={(logOutUser)}>Log Out</button>
            </>
          : <Link to='/login'>Log In / Register</Link>
        }
      </nav>
    </header>
  )
}

export default Nav;