import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import "./App.css";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Enlite = lazy(() => import("./pages/Enlite"));
const Travel = lazy(() => import("./pages/Travel"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Internship = lazy(() => import("./pages/Internship"));
const Backend = lazy(() => import("./pages/Backend"));
const Resume = lazy(() => import("./pages/Resume"));
const PersonalDetails = lazy(() => import("./pages/PersonalDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500); // ⏱️ 3 seconds (change to 10000 for 10 sec)

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <PageLoader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
