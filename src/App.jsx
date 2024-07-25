import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Booklist from './components/Booklist.jsx'
import BookDetails from './components/BookDetails.jsx'
import Account from './components/Account.jsx'
import Auth from './components/Auth.jsx'

const App = () => {
  const [token, setToken] = useState("");

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Booklist />}/>
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='/my-account' element={<Account token={token} />}/>
        <Route path='/login' element={<Auth setToken={setToken} />} />
      </Routes>

    </>
  )
}

export default App
