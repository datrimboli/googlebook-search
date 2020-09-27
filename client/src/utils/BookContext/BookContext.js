import React, { createContext } from 'react'

const BookContext = createContext({
  search: '',
  book: [],
  handleInputChange: () => { },
  handleSearchGoogle: () => { },
  handleSaveBook: () => { }
})

export default BookContext
