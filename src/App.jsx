import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Booklist from './components/Booklist.jsx'
import BookDetails from './components/BookDetails.jsx'


const App = () => {


  return (
    <>
      <nav></nav>
      <h1>Main Page</h1>
      <main>
        <Booklist />


      </main>


    </>
  )
}

export default App
