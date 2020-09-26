import React, { createContext } from 'react'

const BookContext = createContext({
  search: '',
  media: [],
  handleInputChange: () => { },
  handleSearchGoogle: () => { },
  handleSaveBook: () => { }
})

export default BookContext
