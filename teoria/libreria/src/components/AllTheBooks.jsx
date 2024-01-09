
import fantasy from '../../src/books/fantasy.json';

import { Image,Button,Row ,Col,Container,Card,ListGroup } from "react-bootstrap";
/*uguale a*/
//var somma = (x, y) => x + y; 

//var somma = function somma(x, y) {
  //return x + y;
//};

//fantasy.map((book) => {})



function AllTheBooks() {
  console.log(fantasy) 
  //book è il paramentro da map , il singolo elemento di fantasy lo metti a funzione e fai il return della funzione come un react cosi da leggere i libri fantasy
    return (
      <Container >
              <Row >
        {fantasy.map(function (libri){
          console.log(libri)
          return( 
          //key univoca affinchè non ci siano problemi nella riproduzione del map
          <Col  xs={2} md={4} lg={6} key={libri.asin} >
        <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src={libri.img} />
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

        

export default AllTheBooks;


















