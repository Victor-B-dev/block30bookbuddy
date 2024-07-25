import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookDetails = () => {
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

  return (
    <>
    {
      bookDetails.title ? 
        <>
          <h2>{bookDetails.title}</h2>
          <h3>by {bookDetails.author}</h3>
          <img src={bookDetails.coverimage} alt="Book image"/>
          <p>{bookDetails.description}</p>
          <p>Availability:{bookDetails.available}</p>
        </> : null
    }
    </>
  )
}

export default BookDetails;