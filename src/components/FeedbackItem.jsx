import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item }) {
  const  deleteFeedback = () => {};
  const editFeedback = () => {};

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close' aria-label='Delete feedback'>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit' aria-label='Edit feedback'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
