import { useEffect } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaTools,
  FaServer,
  FaBootstrap
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    document.title = "Skills | Rajoli Srinivas";
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="skills-page d-flex">
      <div className="container py-5">

        {/* PAGE HEADING */}
        <div className="row mb-5">
          <div className="col text-center" data-aos="fade-down">
            <h2 className="fw-bold text-white display-6">Technical Skills</h2>
            <p className="text-secondary mt-2">
              Technologies I use to build real-world applications
            </p>
          </div>
        </div>

        {/* SKILLS GRID */}
        <div className="row g-4 justify-content-center">

          {/* FRONTEND */}
          <div className="col-12 col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="skill-card h-100">
              <div className="skill-icon">
                <FaReact />
              </div>
              <h5 className="fw-bold">Frontend</h5>
              <ul>
                <li><FaHtml5 /> HTML5 & <FaCss3Alt /> CSS3</li>
                <li><FaBootstrap />Bootstrap</li>
                <li><FaJsSquare /> JavaScript (ES6+)</li>
                <li><FaReact /> React.js (Hooks, Routing)</li>
              </ul>
            </div>
          </div>

          {/* BACKEND */}
          <div
            className="col-12 col-md-6 col-lg-3"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="skill-card h-100">
              <div className="skill-icon">
                <FaServer />
              </div>
              <h5 className="fw-bold">Backend</h5>
              <ul>
                <li><FaPython /> Python</li>
                <li>Django <span className="learning-tag">Learning</span></li>
                <li>REST APIs <span className="learning-tag">Learning</span></li>
              </ul>
            </div>
          </div>

          {/* DATABASE */}
          <div
            className="col-12 col-md-6 col-lg-3"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="skill-card h-100">
              <div className="skill-icon">
                <FaDatabase />
              </div>
              <h5 className="fw-bold">Database</h5>
              <ul>
                <li>SQL</li>
                <li>Queries & Joins</li>
                <li>Data Filtering</li>
              </ul>
            </div>
          </div>

          {/* TOOLS */}
          <div
            className="col-12 col-md-6 col-lg-3"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="skill-card h-100">
              <div className="skill-icon">
                <FaTools />
              </div>
              <h5 className="fw-bold">Tools & Deployment</h5>
              <ul>
                <li>Git & GitHub</li>
                <li>Vercel & Netlify</li>
                <li>VS Code</li>
                <li>Chrome DevTools</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
