import React, { Component } from 'react'

import { Image,Button,Row ,Col,Container,Card,ListGroup } from "react-bootstrap";

export default class SingleBook extends Component {
  render() {
    return (
      <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.libro.img}  />
      <Card.Body>
        <Card.Title>{this.props.libro.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    )
  }
}
