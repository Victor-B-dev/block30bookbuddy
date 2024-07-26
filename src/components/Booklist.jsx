import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Booklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
        const allBooks = await response.json();
        setBooks(allBooks.books);
      } catch(error) {
      console.log(error);
      }
    }
    getAllBooks();
  }, [])


  return (
    <main>
      <section>
        <h2>Bookbuddys Library Selection</h2>
      </section>

      <section>
        {books.map((book) =>{
          return (<article key={book.id}>
              <Link key={book.id} to={`/books/${book.id}`}>
                <section>
                  <h2>{book.title} <br />
                    by {book.author}
                  </h2>
                  <img src={book.coverimage} alt="Book image" />
                </section>
              </Link>
            </article>
          )
        })
        }
        </section>
    </main>
  );
}

export default Booklist