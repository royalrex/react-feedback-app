import {useState, useContext, useEffect} from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  // prettier-ignore
  const handleTextChange = ({target: {value}}) => { // 👈  get the value
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)

      // prettier-ignore
    } else if (value.trim().length < 10) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      // if (feedbackEdit.edit === true) {
      //   //updateFeedback(feedbackEdit.item.id, newFeedback)
      // } else {
      //   //addFeedback(newFeedback)
      // }

      // NOTE: reset to default state after submission
      setBtnDisabled(true) // 👈  add this line to reset disabled
      setRating(10) //👈 add this line to set rating back to 10
      setText('')
    }
  }

  // NOTE: pass selected to RatingSelect so we don't need local duplicate state
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div role="group" aria-labelledby="rating_header">
          <h2 id="rating_header">How would you rate your service with us?</h2>
          <RatingSelect select={setRating} selected={rating}/>
        </div>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
