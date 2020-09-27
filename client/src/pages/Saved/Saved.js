import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Saved = () => {

  const [savedState, setSavedState] = useState({
    saved: []
  })

  savedState.handleDeleteSaved = id => {
    API.deleteBook(id)
      .then(() => {
        let saved = savedState.saved.filter(book => book._id !== id)
        setSavedState({ ...savedState, saved })
      })
  }

  useEffect(() => {
    API.getSavedBook()
      .then(({ data }) => {
        setSavedState({ ...savedState, saved: data })
      })
  }, [])

  return (
    <>
    <h1>Your saved Books</h1>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(book => (
            <div key={book.googleId}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <h4>Authors: {book.authors}</h4>
              <h4>Description: {book.description}</h4>
             
              <Button color="primary" href={book.link}>Google Books Link</Button>
              <br></br>
              <br></br>
              <Button color="primary" onClick={() => savedState.handleDeleteSaved(book._id)}>Delete</Button>
              <hr></hr>
            </div>
          ))
        ) : null
      }
    </>
  )
}

export default Saved
