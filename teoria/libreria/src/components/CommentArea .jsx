import React, { Component } from 'react'
import Loading from './Loading';
import Error from './Error';
import AddComment from './AddComment'
import CommentList from './CommentList'
//GET dei comment
  
export default class CommentArea  extends Component {

    state={comments:[],
    isLoading:true,
isError:false,}

    componentDidMount = async () => {
        try {
         const response = await fetch("https://striveschool.herokuapp.com/api/comments"+this.props.asin,
         {

            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDUyNjc5MTQsImV4cCI6MTcwNjQ3NzUxNH0.NJf5FnDV8gxN0ic8xOvI-xG5s45rCVsBiExJWQU4Tvs'
            },
         }
         
         
         )
         console.log(response)
         
            if(response.ok) {
                 const comments = await response.json()
                  this.setState({ comments:comments,isLoading:false,isError:false })
                
       } else {
           console.log('error while fetching')
       this.setState({isLoading:false,isError:true})
       
        }
    
    
    }catch (error) {
        console.log(error)
        this.setState({ isLoading: false, isError: true })
      }
    }

      
       
    
  render() {
    return (
      <div className="text-center">
        {this.state.isLoading&& <Loading/>}
        {this.state.isError && <Error/>}
        <AddComment asin={this.props.asin}/>
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }
}
