import { Routes, Route } from 'react-router-dom'
import Booklist from './components/Booklist.jsx'
import BookDetails from './components/BookDetails.jsx'


const App = () => {


  return (
    <>
      <nav></nav>

      <Routes>
        <Route path='/' element={<Booklist />}/>
        <Route path='/books/:id' element={<BookDetails />} />
      </Routes>

    </>
  )
}

export default App
