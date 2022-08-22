import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/indexPage/indexPage'
import Results from './pages/results/results'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/results' exact element={<Results />} />
          <Route path='/' exact element={<IndexPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
