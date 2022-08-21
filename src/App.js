import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import FeedbackData from './data/FeedbackData';

function App() {
  const feedback = FeedbackData;
  return (
    <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} />
              </>
            }
          ></Route>

          <Route path='/about' element={<AboutPage/>}/>
        </Routes>

        <AboutIconLink/>
      </div>
    </Router>
  )
}

export default App
