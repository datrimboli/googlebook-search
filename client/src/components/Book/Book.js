import React from 'react'

import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./book.css"


const Book = props => {
  return (<div>
    <Card>
      <CardImg className="image" src={props.book.image} alt="Card image cap" />
      <CardBody>
        <CardTitle className="title">{props.book.title}</CardTitle>
        <CardSubtitle>Written by: {props.book.authors}</CardSubtitle>
        <CardText>{props.book.description}</CardText>
        <Button
          size="small"
          color="primary"
          onClick={() => props.handleSaveBook(props.book.googleId)}>
          Save
    </Button>
        <br></br>
        <br></br>
        <Button color="primary" href={props.book.link}>Google Books Link</Button>
      </CardBody>
    </Card>
  </div>
  )
}

export default Book