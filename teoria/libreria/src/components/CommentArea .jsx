import React, { Component } from 'react'




  
export default class CommentArea  extends Component {

    state={comments:[],}

    componentDidMount = async () => {
        try {
         const response = await fetch("https://striveschool.herokuapp.com/api/comments")
         
            if(response.ok) {
                 const data = await response.json()
                  this.setState({ reservations: data })
                
       } else {
           console.log('error while fetching')
       }
    
    
    }catch (error) {
        console.log(error)
        this.setState({ isLoading: false, isError: true })
      }
    }

      
       
    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
