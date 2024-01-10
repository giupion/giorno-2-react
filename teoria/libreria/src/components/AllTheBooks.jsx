/*import SingleBook from './SingleBook';
import fantasy from '../../src/books/fantasy.json';*/





/*una vlasse gestisce lo stato ...rfc=> React Function Component
rcc=> React Class Component
rafc=> Arrow Function Component */


import React, { Component } from 'react';
import Fantasy from '../books/fantasy.json';
import History from '../books/history.json';
import Horror from '../books/horror.json';
import Romance from '../books/romance.json';
import Scifi from '../books/scifi.json';

export default class AllTheBooks extends Component {
  state={books:{}}

//uso hook di react componentdidmount va a fai qualcosa dopo che componente montato setto lo stato

componentDidMount(){
//dentro books metto cio che è presente in books ... estrae dati da book leggo un oggetto contenuto dentro proprietà oggetto stato
  this.setState({books:{...this.state.books, //scarto il contenuto dell'oggetto con le proprietà 
  //se mettevo this.state.libri avevo {{obj}, proprieta aggiunta} e non ...this.state.libri {obj e aggiungo proprieta a obj}
    fantasy:Fantasy, //creo categoria fantasy che contiene Fantasy di import e l'aggiungo a libri
    history:History,//conviene subito metterli sullo state 
    horror:Horror,
    romance:Romance,
    scifi:Scifi,
  }})

  
}
  render() {
//sul render fai consol log state
 
    return (
      <div>
        <div>All the books</div>
        <h3>Total books: {console.log(this.state.books.length)}</h3>
      </div>
    )
  }
}




/*uguale a*/
//var somma = (x, y) => x + y; 

//var somma = function somma(x, y) {
  //return x + y;
//};

//fantasy.map((book) => {})



/*function AllTheBooks() {
  console.log(fantasy) 
  //book è il paramentro da map , il singolo elemento di fantasy lo metti a funzione e fai il return della funzione come un react cosi da leggere i libri fantasy
    return (
      <Container >
              <Row >
        {fantasy.map(function mappalibri(libri){
          console.log(libri)
          return( 
          //key univoca affinchè non ci siano problemi nella riproduzione del map
          <Col  xs={12} md={4}  key={libri.asin} >
        <Card   className="bookcover">
          <Card.Img variant="top" src={libri.img} className="bookcover" />
            <Card.Body>
              <Card.Title>{libri.title}</Card.Title>
              <Card.Text>
               
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{libri.category}</ListGroup.Item>
                <ListGroup.Item>{libri.price}</ListGroup.Item>
                <ListGroup.Item>{libri.asin}</ListGroup.Item>
              </ListGroup>
                <Card.Body>
                <Button variant="primary">Buy</Button>
                  <Button variant="primary">Remove</Button>
                </Card.Body>
              </Card>
              </Col>)

}  ) }
        </Row>
        </Container>
        )
}

        

export default AllTheBooks;*/


















