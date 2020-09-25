import React, { useState } from 'react'
import MediaContext from '../../utils/MediaContext'
import Typography from '@material-ui/core/Typography'
import Form from '../../components/Form'
import Media from '../../components/Media'
import API from '../../utils/API'

const Home = () => {

  const [mediaState, setMediaState] = useState({
    search: '',
    media: []
  })

  mediaState.handleInputChange = event => {
    setMediaState({ ...mediaState, [event.target.name]: event.target.value })
  }

  mediaState.handleSearchOMDB = event => {
    event.preventDefault()
    API.getMedia(mediaState.search)
      .then(({ data }) => {
        setMediaState({ ...mediaState, media: data, search: '' })
      })
      .catch(err => console.error(err))
  }

  mediaState.handleSaveMedia = imdbID => {
    const saveMedia = mediaState.media.filter(x => x.imdbID === imdbID)[0]
    API.saveMedia(saveMedia)
      .then(() => {
        const media = mediaState.media.filter(x => x.imdbID !== imdbID)
        setMediaState({ ...mediaState, media })
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