import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'

export default class BookList extends Component {


    state={searchQuery:'',}

  render() {
    return (
        <>
    <Row className='mx-5'>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}

                //fai una funzione con un evento al metodo on change modificando la sua azione, registra nello stato  la proprietà target di onchange e il suo valore
              />
            </Form.Group>
          </Col>
        </Row>
      
  
            
        <Row className='allinearow'>
          {this.props.libri
        .filter((elemento)=>{
        
            console.log(elemento.title.toLowerCase().includes(this.state.searchQuery))})}

           
            {this.props.libri.map((elemento) => ( //l'elemento del map lo rendo uguale a libro cosi ho l'oggetto e glielo passo
             //faccio un map di libri, questo libri lo prendo da app , metto booklist e gli passo libri={fantasy con gli elementi destrutturati }
            //per ogni elemento di libri={fantasy mappo e faccio na colonna contente tutti gli elementi  che sarebbero un componente, singlebooks. L}
              <Col xs={12} md={4} key={elemento.asin} className="mt-5 mb-5 me-5 ms-5 ">
                <SingleBook libro={elemento} />
              </Col>
            ))}
        </Row>
        </>
    )
  }
}

