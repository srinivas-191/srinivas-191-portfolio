import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaPlane, FaCalculator } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Rajoli Srinivas";
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  const projects = [
    {
      title: "ENLITE",
      desc: "Energy Efficiency Recommendation System using React and Python with ML-driven insights.",
      link: "/projects/enlite",
      icon: <FaBolt />,
      tech: "React • Python • Django",
    },
    {
      title: "Travel Packages Recommendation",
      desc: "React-based travel planning platform with Firebase authentication and dynamic UI.",
      link: "/projects/travel",
      icon: <FaPlane />,
      tech: "React • Firebase • Flask",
    },
    {
      title: "Simple Scientific and Business Calculator",
      desc: "Frontend-only  Modern and Dynamic Calculator, Sistance, Time, Speed and currency conversions.",
      link: "/projects/calculator",
      icon: <FaCalculator />,
      tech: "JavaScript • APIs",
    },
  ];

  return (
    <section className="projects-page d-flex align-items-center">
      <div className="container py-5">

        {/* PAGE HEADER */}
        <div className="row mb-5">
          <div className="col text-center" data-aos="fade-down">
            <h2 className="fw-bold text-white display-6">Projects</h2>
            <p className="text-secondary mt-2">
              Real-world applications I’ve built and deployed
            </p>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="row g-4 justify-content-center">

          {projects.map((p, i) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 120}
            >
              <div className="project-card h-100 d-flex flex-column">

                {/* ICON */}
                <div className="project-icon mb-3">
                  {p.icon}
                </div>

                {/* CONTENT */}
                <h5 className="fw-bold text-white">{p.title}</h5>
                <p className="text-light mt-2 flex-grow-1">
                  {p.desc}
                </p>

                {/* TECH */}
                <span className="tech-tag mb-3">
                  {p.tech}
                </span>

                {/* CTA */}
                <Link to={p.link} className="btn btn-outline-info mt-auto">
                  View Project
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
