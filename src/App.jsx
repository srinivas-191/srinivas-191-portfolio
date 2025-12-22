import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Enlite from "./pages/Enlite";
import Travel from "./pages/Travel";
import Calculator from "./pages/Calculator";
import Internship from "./pages/Internship";
import Backend from "./pages/Backend";
import PersonalDetails from "./pages/PersonalDetails";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/enlite" element={<Enlite />} />
        <Route path="/projects/travel" element={<Travel />} />
        <Route path="/projects/calculator" element={<Calculator />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/backend-understanding" element={<Backend />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
