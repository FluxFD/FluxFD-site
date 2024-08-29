import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
function App() {
  return (
    <>
      <main
        className=""
        style={{
          minHeight: '100vh',
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nav" element={<NavBar />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
