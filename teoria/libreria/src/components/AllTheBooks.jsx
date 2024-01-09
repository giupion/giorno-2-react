import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import fantasy from '../../src/books/fantasy.json';
import Row from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/ListGroup';
/*uguale a*/
//var somma = (x, y) => x + y; 

//var somma = function somma(x, y) {
  //return x + y;
//};

//fantasy.map((book) => {})



function AllTheBooks() {
  console.log(fantasy)
  //book è il paramentro da map , il singolo elemento di fantasy
    return (
              <Row>
        {fantasy.map(function (book){
          console.log(book)
          return( 
          
           <Col xs={12} md={4}  key={book.asin}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
               
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              </Col>)

})}
        </Row>
        )
}

        

export default AllTheBooks;


















