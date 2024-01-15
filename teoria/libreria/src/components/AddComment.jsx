import React, { Component } from 'react';
import {Button,Form} from 'react-bootstrap';

export default class AddComment extends Component {
  //POST dei comment
   state={ comment:{comment:'',
   rate:1,
elementId:this.props.asin,},}

sendComment=async(e)=>{
    e.preventDefault()
    try{
        let response=await fetch(

            'https://striveschool-api.herokuapp.com/api/comments', 
       {

        method:'POST',
        body:JSON.stringify(this.state.comment),
        headers:{
            'Content-type':'application/json',
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDUyNjc5MTQsImV4cCI6MTcwNjQ3NzUxNH0.NJf5FnDV8gxN0ic8xOvI-xG5s45rCVsBiExJWQU4Tvs"
        },
       }
       
            )

            if(response.ok){
                alert('Comment was sent!')
                this.setState({
                    comment:{
                        comment:'',
                        rate:1,
                        elementId:this.props.asin,
                    },
                })
            }
            else{
                console.log('error')
                alert('something went wrong')

            }
    }
catch(error){
    console.log('error')
}
}
  
  
    render() {
    return (
      <div className="my-3">
        <Form onSubmit={this.sendComment}>
        <Form.Group>
<Form.Label>Comment text</Form.Label>
<Form.Control type="text" 
placeholder="add a comment here"
value={this.state.comment.comment}
onChange={(e)=>this.setState({
    comment:{...this.state.comment,
    comment:e.target.value,},

})}
/>
</Form.Group>
<Form.Group>
<Form.Label>Rating</Form.Label>
<Form.Control
as="select"
value={this.state.comment.rate}
onChange={(e)=>this.setState({comment:{
    ...this.state.comment,
    rate:e.target.value,
},})}


>

<option> 1</option>
<option> 2</option>
<option>3</option>
<option> 4</option>
<option> 5</option>
</Form.Control>

</Form.Group>
<Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
