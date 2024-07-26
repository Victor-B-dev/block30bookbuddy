import { Link } from 'react-router-dom';

const Nav = ({ token, setToken }) => {

  const logOutUser = () => {
    setToken("")
  }
  
  return (
    <>
      <Link to='/'>Home</Link><br />
      <Link to='/my-account'>My Account</Link><br />
      { token ?
        <button onClick={(logOutUser)}>Log Out</button>
        : <Link to='/login'>Log In / Register</Link>
      }
    </>
  )
}

export default Nav;