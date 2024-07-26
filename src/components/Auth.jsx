import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ( { setToken }) => {
  const [showLogin, setShowLogin] = useState(true);

  const [firstNameInput, setFNameInput] = useState("");
  const [lastNameInput, setLNameInput] = useState("");1
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate()

  const registerUser = async() => {
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname: firstNameInput,
          lastname: lastNameInput,
          email: emailInput,
          password: passwordInput
        })
      });

      const result = await response.json()
      console.log(result);
    } catch (error){
      console.log(error);
    }

    setFNameInput("");
    setLNameInput("");
    setEmailInput("");
    setPasswordInput("");
  }

  const logInUser = async() => {
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput
        })
      });

      const json = await response.json();
      setToken(json.token);
      navigate('/');
      } catch (error){
        console.log(error);
      }
  }


  return (
    <main>
      <form>
        {
          showLogin ? 
            null :
              <>
                <input value={firstNameInput} onChange={(event) => { setFNameInput(event.target.value) }} placeholder="First Name" /> <br />
              
                <input value={lastNameInput} onChange={(event) => { setLNameInput(event.target.value) }} placeholder="Last Name" /> <br />
              </> 
        }
        
        <input value={emailInput} onChange={(event) => { setEmailInput(event.target.value) }} type="email" placeholder="email" required /> <br />

        <input value={passwordInput} onChange={(event) => { setPasswordInput(event.target.value) }} type="password" placeholder="password" required /> <br />

        {
          showLogin ? 
            <button onClick={logInUser}>Log In</button> : 
            <button onClick={registerUser}>Register</button>
        }
        
        </form>

        {
          showLogin ? 
            <p>Create an Account to checkout! <button onClick={() => { setShowLogin(false) }}>Register here</button></p> :
            <p>Already a member? <button onClick={() => { setShowLogin(true) }}>Log in here</button></p>
        }
      </main>
  )
}

export default Auth