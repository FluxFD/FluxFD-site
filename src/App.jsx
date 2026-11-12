import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import FloatingContact from "./Components/FloatingContact";
import Analytics from "./Components/Analytics";
import SiteBackground from "./Components/SiteBackground";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Project from "./Pages/Project";
import ProjectDetails from "./Components/ProjectDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <Router>
      <SiteBackground />
      <Analytics />
      <NavBar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </Router>
  );
}
