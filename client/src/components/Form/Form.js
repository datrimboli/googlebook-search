import React, { useContext } from 'react'
import MediaContext from '../../utils/MediaContext'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

const Form = () => {

  const {
    search,
    handleInputChange,
    handleSearchOMDB
  } = useContext(MediaContext)

  return (
    <form onSubmit={handleSearchOMDB}>
      <TextField 
        label="Search" 
        variant="outlined" 
        name="search"
        value={search}
        onChange={handleInputChange} />
      <p>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SearchIcon />}
          onClick={handleSearchOMDB}
        >
          Search
      </Button>
      </p>
    </form>
  )
}

export default Form
