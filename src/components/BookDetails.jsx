import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookDetails = ({ token }) => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({})
  
  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
        const singleBook = await response.json();
        setBookDetails(singleBook.book);
        console.log(bookDetails)
      } catch(error) {
      console.log(error);
      }
    }
    getBookDetails();
  }, [])

  const bookCheckOut = async() => {
    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        method: "PATCH",
        body: JSON.stringify({
          available: false
        })
      });
      const checkedOutBook = await response.json();
      console.log(checkedOutBook.book.available)
    } catch (error){
      console.log(error)
    }
  }

  return (
    <main>
    {
      bookDetails.title ? 
        <article>
          <h2>{bookDetails.title}</h2>
          <h3>by {bookDetails.author}</h3>
          <img src={bookDetails.coverimage} alt="Book image"/>
          <p>{bookDetails.description}</p>
          <p>Availability:{bookDetails.available}</p>
          { token ? 
            <button onClick={bookCheckOut}>Check Out This Book</button>
            :null
          }
        </article> 
        : null
    }
    </main>
  )
}

export default BookDetails;