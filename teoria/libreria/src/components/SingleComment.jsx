import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
       
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2YyOWMwNTgzNTAwMTg1MjMxODMiLCJpYXQiOjE3MDUyNjc5MTQsImV4cCI6MTcwNjQ3NzUxNH0.NJf5FnDV8gxN0ic8xOvI-xG5s45rCVsBiExJWQU4Tvs',
          },
        }
      )
      if (response.ok) {
        alert('Comment was deleted successfully!')
        
      } else {
        alert('Error - comment was NOT deleted!')
      }
    } catch (error) {
      alert('Error - comment was NOT deleted!')
    }
  }

  return (
    <div className='mb-5'>
    <ListGroup.Item  >
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
    </div>
  )
}

export default SingleComment