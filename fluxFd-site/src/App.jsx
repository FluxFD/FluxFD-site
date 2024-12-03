import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Project from './Pages/Project'
import { ProjectDetails } from './Components/ProjectDetails'
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
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/project-details" element={<ProjectDetails />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
