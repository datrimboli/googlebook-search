import React, { useState } from 'react'
import BooContext from '../../utils/BookContext'
import Typography from '@material-ui/core/Typography'
import Form from '../../components/Form'
import Book from '../../components/Book'
import API from '../../utils/API'

const Home = () => {

  const [bookState, setbookState] = useState({
    search: '',
    media: []
  })

  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  bookState.handleSearchGoogle = event => {
    event.preventDefault()
    API.getBook(bookState.search)
      .then(({ data }) => {
        setBookState({ ...bookState, book: data, search: '' })
      })
      .catch(err => console.error(err))
  }

  bookState.handleSaveMedia = googleId => {
    const saveBook = bookState.media.filter(x => x.googleId === googleId)[0]
    API.saveBook(saveBook)
      .then(() => {
        const book = bookState.book.filter(x => x.googleId !== googleId)
        setBookState({ ...bookState, book })
      })
  }

  return (
    <>
      <hr />
      <Typography variant="h6">
        Search for Movies and TV Shows
      </Typography>
      <MediaContext.Provider value={mediaState}>
      <Form />
      {
        mediaState.media.length > 0 ? (
          mediaState.media.map(media => (
            <Media
              key={media.imdbID}
              media={media}
              handleSaveMedia={mediaState.handleSaveMedia} />
          ))
        ) : null
      }
      </MediaContext.Provider>
    </>
  )
}

export default Home