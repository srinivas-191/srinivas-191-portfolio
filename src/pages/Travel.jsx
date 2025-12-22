import { useEffect } from "react";
import {
  FaPlane,
  FaUserCog,
  FaPaintBrush,
  FaShieldAlt,
  FaLightbulb,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "bootstrap";

import img1 from "../assets/travel/travel-1.png";
import img2 from "../assets/travel/travel-2.png";
import img3 from "../assets/travel/travel-3.png";
import img4 from "../assets/travel/travel-4.png";

export default function Travel() {

  useEffect(() => {
  document.title =
    "Travel Packages Recommendation System | Rajoli Srinivas";
  AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });

  const el = document.querySelector("#travelCarousel");
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
        <div className="row mb-5">
          <div className="col text-center" data-aos="fade-down">
            <h2 className="fw-bold text-white display-6">
              <FaPlane className="me-2 text-info" />
              Travel Packages Recommendation System
            </h2>
            <p className="text-secondary mt-2">
              React-based travel planning & recommendation platform
            </p>
          </div>
        </div>

        {/* SCREENSHOT CAROUSEL */}
        <div className="row mb-5" data-aos="zoom-in">
          <div className="col-12 col-lg-10 mx-auto">
            <div
  id="travelCarousel"
  className="carousel slide project-carousel"
  data-bs-ride="carousel"
  data-bs-interval="3000"
>
  <div className="carousel-inner rounded">
    {[img1, img2, img3, img4].map((img, i) => (
      <div
        key={i}
        className={`carousel-item ${i === 0 ? "active" : ""}`}
      >
        <div className="carousel-img-wrapper">
          <img
            src={img}
            alt={`Travel Project Screenshot ${i + 1}`}
            loading="lazy"
          />
        </div>
      </div>
    ))}
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#travelCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#travelCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

          </div>
        </div>

        <div className="row g-5">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-8" data-aos="fade-right">

            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaPaintBrush /> Project Overview
              </h5>
              <p>
                A web application that helps users explore destinations and
                receive travel package recommendations based on preferences
                and budget, with a strong focus on frontend structure and UI stability.
              </p>
            </div>

            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaUserCog /> My Role
              </h5>
              <p>
                <strong>Frontend Developer</strong> — built core pages,
                authentication flow, and ensured consistent UI behavior.
              </p>
            </div>

            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaShieldAlt /> Backend & Data Handling
              </h5>
              <p>
                Backend developed by team using <strong>Flask</strong>. I handled
                frontend integration and defensive rendering to prevent crashes
                when API data was unavailable.
              </p>
            </div>

            <div className="project-section">
              <h5 className="section-title">
                <FaLightbulb /> Key Learnings
              </h5>
              <ul>
                <li>Defensive UI rendering</li>
                <li>Handling async data safely</li>
                <li>Frontend-backend coordination</li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-12 col-lg-4" data-aos="fade-left">
            <div className="project-sidebar">

              <h6 className="fw-bold mb-3">Features</h6>
              <div className="feature-badges mb-4">
                <span><FaCheckCircle /> Firebase Auth</span>
                <span><FaCheckCircle /> Responsive UI</span>
                <span><FaCheckCircle /> API Integration</span>
              </div>

              <h6 className="fw-bold mb-3">Tech Stack</h6>
              <ul className="tech-list">
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Firebase Authentication</li>
                <li>Flask (Team Backend)</li>
                <li>Bootstrap</li>
              </ul>

              {/* BUTTONS */}
              <div className="d-grid gap-2 mt-4">
                <a
                  href="https://travelcostandpackagesrecommendation.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  Live Demo <FaExternalLinkAlt className="ms-2" />
                </a>

                <a
                  href="https://github.com/srinivas-191/Travel-Recommendation-Cost-and-Package-Rexcommendation-Syatem.git"
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
