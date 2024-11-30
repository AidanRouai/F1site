import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Standings from './pages/Standings'
import Telemetry from './pages/Telemetry'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          <Link to="/">
            <h1 className="text-4xl font-bold text-center mb-12">F1 Stats Hub</h1>
          </Link>
          
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Link
                  to="/standings"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg w-64 text-center transform transition-transform hover:scale-105"
                >
                  Driver & Constructor Standings
                </Link>
                
                <Link
                  to="/telemetry"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg w-64 text-center transform transition-transform hover:scale-105"
                >
                  Race Telemetry
                </Link>
              </div>
            } />
            <Route path="/standings" element={<Standings />} />
            <Route path="/telemetry" element={<Telemetry />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
