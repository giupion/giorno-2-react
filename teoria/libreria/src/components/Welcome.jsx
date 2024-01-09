import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Welcome() {
  return (
    <Card>
      <Card.Header>Welcome</Card.Header>
      <Card.Body>
        <Card.Title>My Shop</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant="primary">Click to receive news</Button>
      </Card.Body>
    </Card>
  );
}

export default Welcome;
