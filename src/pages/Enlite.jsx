import { useEffect } from "react";
import {
  FaBolt,
  FaUserCog,
  FaCogs,
  FaLightbulb,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "bootstrap";

import img1 from "../assets/enlite/enlite-1.png";
import img2 from "../assets/enlite/enlite-2.png";
import img3 from "../assets/enlite/enlite-3.png";
import img4 from "../assets/enlite/enlite-4.png";
import img5 from "../assets/enlite/enlite-5.png";

export default function Enlite() {
  useEffect(() => {
    document.title = "ENLITE Project | Rajoli Srinivas";
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
    const el = document.querySelector("#enliteCarousel");
      if (el) {
        new Carousel(el, {
          interval: 3000,
          ride: "carousel",
          pause: "hover",
          wrap: true,
        });
      }
  }, []);

  return (
    <section className="project-detail-page d-flex align-items-center">
      <div className="container py-5">

        {/* HEADER */}
        <div className="row mb-4">
          <div className="col text-center" data-aos="fade-down">
            <h2 className="fw-bold text-white display-6">
              <FaBolt className="me-2 text-info" />
              ENLITE
            </h2>
            <p className="text-secondary mt-2">
              Energy Efficiency Recommendation System
            </p>
          </div>
        </div>

        {/* SCREENSHOT CAROUSEL */}
        <div className="row mb-5" data-aos="zoom-in">
          <div className="col-12 col-lg-10 mx-auto px-0">
            <div
              id="enliteCarousel"
              className="carousel slide project-carousel"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner rounded">

                {[img1, img2, img3, img4, img5].map((img, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                  >
                    <div className="carousel-img-wrapper">
                      <img
                        src={img}
                        alt={`ENLITE Screenshot ${i + 1}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}

              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#enliteCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#enliteCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="row g-5">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-8" data-aos="fade-right">

            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaCogs /> Project Overview
              </h5>
              <p>
                ENLITE is a full-stack web application designed to analyze
                building parameters and provide energy efficiency
                recommendations using machine-learning-driven backend logic.
                The system focuses on delivering actionable insights through a
                clean and responsive user interface.
              </p>
            </div>

            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaUserCog /> My Role
              </h5>
              <p>
                I worked as a <strong>Frontend Developer & Deployment Handler</strong>,
                responsible for UI development, backend integration, and
                handling both frontend and backend deployments.
              </p>
            </div>

            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaCogs /> Key Challenges
              </h5>
              <ul>
                <li>Handling ML-driven API responses</li>
                <li>Deployment issues between local & production</li>
                <li>Frontend-backend integration debugging</li>
              </ul>
            </div>

            <div className="project-section">
              <h5 className="section-title">
                <FaLightbulb /> Key Learnings
              </h5>
              <ul>
                <li>Frontend–backend integration workflows</li>
                <li>Production deployment challenges</li>
                <li>Structuring UI for ML-based responses</li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-12 col-lg-4" data-aos="fade-left">
            <div className="project-sidebar">

              <h6 className="fw-bold mb-3">Tech Stack</h6>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Python</li>
                <li>Django</li>
                <li>Bootstrap</li>
              </ul>
              
              <div className="d-grid gap-2 mt-4">
                <a
                  href="https://enlite-new-project-w3ks.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info w-100 mt-4"
                >
                  View Live Project <FaExternalLinkAlt className="ms-2" />
                </a>

                <a
                  href="https://github.com/srinivas-191/enlite-new-project.git"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  GitHub Code <FaGithub className="ms-2" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
