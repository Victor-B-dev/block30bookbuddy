import { useState, useEffect } from 'react'

const Account = ({ token, setToken }) => {
  const [acctDetails, setAcctDetails ] = useState({});
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const getMyAccount = async () => {
      try {
        const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {  
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
        const result = await response.json();
        console.log(result)
        setAcctDetails(result);
      } catch(error) {
      console.log(error);
      }

      try {
        const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations', {  
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
        const result = await response.json();
        setReservations(result.reservation);
      } catch(error) {
      console.log(error);
      }

    }
    getMyAccount();
  }, [token]);

  const logOutUser = () => {
    setToken("")
  }

  const deleteReservation = async (reservationID) => {
    try {
      const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationID}`, {  
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        method: "DELETE"
      })
      const result = await response.json();
      console.log(result)
    } catch(error) {
    console.log(error);
    }


  }

  return (
    <>
        <h2> Your Account Info</h2>
    
        <p>Welcome {acctDetails.firstname} {acctDetails.lastname}</p>
        <p>Email: {acctDetails.email}</p>
        <p>Your checked out books are as follows:</p>
        {reservations.map((book) => {
          return (<>
            <p key={book.id}> {book.title} by {book.author} </p>
            <button onClick={(()=> {deleteReservation(book.id)})}>Return This Book</button>
            </>
          )
        })
        }
        <br />  
        <button onClick={(logOutUser)}>Log Me Out</button>
    </>
  )
}


export default Account