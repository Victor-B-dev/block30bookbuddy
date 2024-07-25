import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Booklist from './components/Booklist.jsx'
import BookDetails from './components/BookDetails.jsx'


const App = () => {


  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Booklist />}/>
        <Route path='/books/:id' element={<BookDetails />} />
      </Routes>

    </>
  )
}

export default App
