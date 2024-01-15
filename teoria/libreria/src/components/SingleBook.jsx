import React, { Component } from 'react'

import { Image,Button,Row ,Col,Container,Card,ListGroup } from "react-bootstrap";
import CommentArea from './CommentArea ';

export default class SingleBook extends Component {


    state={selected:false,}
    //metti nello stato la proprieta selected in falso
  render() {
    return 
      <>
      
        <Card  onClick={()=>this.setState({selected: !this.state.selected})} style={{  width:'287px', height:'1300px' , border: this.state.selected ?  '3px solid blue': 'none'  }}>
        <Card.Img variant="top" src={this.props.libro.img}  style={{ width: '100%', height: '400px' }} />
         
        
          <Card.Body>
            <Card.Title>{this.props.libro.title}</Card.Title>
            <Card.Text>
             
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" >
              <ListGroup.Item>category: {this.props.libro.category}</ListGroup.Item>
              <ListGroup.Item>price: {this.props.libro.price}</ListGroup.Item>
              <ListGroup.Item>asin:{this.props.libro.asin}</ListGroup.Item>
            </ListGroup>
              <Card.Body>
              <Button variant="primary me-5">Buy</Button>
                <Button variant="primary me-5">Remove</Button>
                <CommentArea/>
              </Card.Body>
            
            </Card>
            {this.state.selected && <CommentArea asin={this.props.libro.asin}  />}
      </>
   //libro sarebbe elemento da book list
      
    )
  }
}
