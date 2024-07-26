import { useState, useEffect } from 'react'

const Account = ({ token, setToken }) => {
  const [acctDetails, setAcctDetails ] = useState({});

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
    }
    getMyAccount();
  }, [token]);

  return (
    <>
        <h2> Your Account Info</h2>
    
        <p>Welcome {acctDetails.firstname} {acctDetails.lastname}</p>
        <p>Email: {acctDetails.email}</p>
        {acctDetails.books.map((book) => {
          return (<p key={book.id}> {book.title} by {book.author} </p>
          )
        })


        }  
      
          
    </>
  )
}


export default Account