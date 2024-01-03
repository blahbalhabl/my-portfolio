/* 
* Project: My Portfolio
* Description: Main App Component
* Developer: Mark Leigh David
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <div className='h-screen px-[15%] bg-background text-white'>
      <Router>
        <Navbar />
        <Routes>
          {/* Landing Page Route === '/' */}
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
