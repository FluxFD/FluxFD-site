import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Project from './Pages/Project'
import { ProjectDetails } from './Components/ProjectDetails'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <main
        style={{
          minHeight: '100vh',
        }}
      >
        <Router>
          <div className='p-6'>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/project-details" element={<ProjectDetails />} />
          </Routes>
          </div>
          <Footer />
        </Router>
      </main>
    </>
  )
}

export default App
