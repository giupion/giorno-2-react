import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'

export default class BookList extends Component {
  render() {
    return (
      <>
        <Row>
{this.props.libri.map((b)=>

{<Col  xs={12} md={4}   >


<SingleBook libro={b}/>
</Col>})
  }
        </Row>
      </>
    )
  }
}

