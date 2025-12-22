import { useEffect } from "react";
import {
  FaCalculator,
  FaExchangeAlt,
  FaMoon,
  FaSun,
  FaTrash,
  FaHistory,
  FaLightbulb,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "bootstrap";

import img1 from "../assets/calculator/calc-1.png";
import img2 from "../assets/calculator/calc-2.png";
import img3 from "../assets/calculator/calc-3.png";
import img4 from "../assets/calculator/calc-4.png"


export default function Calculator() {
  useEffect(() => {
    document.title =
      "Scientific & Business Calculator | Rajoli Srinivas";
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
    const el = document.querySelector("#calculatorCarousel");
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
    <section className="project-detail-page">
      <div className="container py-5">

        {/* HEADER */}
        <div className="row mb-4">
          <div className="col text-center" data-aos="fade-down">
            <h2 className="fw-bold text-white display-6">
              <FaCalculator className="me-2 text-info" />
              Scientific & Business Calculator
            </h2>
            <p className="text-secondary mt-2">
              Frontend-only calculator with business conversions and scientific functions
            </p>
          </div>
        </div>

        {/* SCREENSHOT CAROUSEL */}
<div className="row mb-5" data-aos="zoom-in">
  <div className="col-12 col-lg-10 mx-auto px-0">
    <div
      id="calculatorCarousel"
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
                alt={`Calculator Screenshot ${i + 1}`}
                loading="lazy"
              />
            </div>
          </div>
        ))}

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#calculatorCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#calculatorCarousel"
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

            {/* OVERVIEW */}
            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaCalculator /> Project Overview
              </h5>
              <p>
                This project is a frontend-only calculator application that
                combines <strong>business calculations</strong> and
                <strong> scientific calculations</strong> in a single interface.
                It focuses on clean UI, accurate calculations, conversion logic,
                and maintaining user interaction history.
              </p>
            </div>

            {/* BUSINESS CALCULATOR */}
            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaExchangeAlt /> Business Calculator Features
              </h5>
              <ul>
                <li>Distance conversions (Km ↔ Miles, Meters ↔ Feet)</li>
                <li>Temperature conversions (Celsius, Fahrenheit, Kelvin)</li>
                <li>Speed conversions (m/s, km/h, miles/h)</li>
                <li>Time conversions (seconds, minutes, hours)</li>
                <li>
                  Currency conversion using
                  <strong> ExchangeRate API (v6)</strong>
                  (USD, INR, EUR, GBP)
                </li>
              </ul>
            </div>

            {/* SCIENTIFIC */}
            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaCalculator /> Scientific Calculator Features
              </h5>
              <ul>
                <li>Trigonometric functions (sin, cos, tan)</li>
                <li>Percentage and modulus operations</li>
                <li>Power and square root calculations</li>
                <li>Logarithmic calculations</li>
              </ul>
            </div>

            {/* COMMON FEATURES */}
            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaHistory /> Common Features
              </h5>
              <ul>
                <li>Calculation history panel with individual delete option</li>
                <li>Clear display and clear history buttons</li>
                <li>Delete last entered input</li>
                <li>Dark mode / light mode toggle</li>
                <li>Switch button between business and scientific modes</li>
              </ul>
            </div>

            {/* LEARNINGS */}
            <div className="project-section">
              <h5 className="section-title">
                <FaLightbulb /> Key Learnings
              </h5>
              <ul>
                <li>Implementing calculation logic using JavaScript</li>
                <li>Managing UI state without a backend</li>
                <li>Handling API-based currency conversion</li>
                <li>Designing reusable UI components using plain HTML/CSS</li>
                <li>Structuring frontend projects for maintainability</li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-12 col-lg-4" data-aos="fade-left">
            <div className="project-sidebar">

              <h6 className="fw-bold mb-3">Tech Stack</h6>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ExchangeRate API (v6)</li>
              </ul>

              <div className="feature-badges mt-3">
                <span><FaCalculator /> Scientific</span>
                <span><FaExchangeAlt /> Business</span>
                <span><FaMoon /> Dark Mode</span>
                <span><FaTrash /> History Control</span>
              </div>

              {/* LINKS */}
              <div className="d-grid gap-2 mt-4">
                <a
                  href="https://simple-and-scientific-calculator.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/srinivas-191/SIMPLE-AND-SCIENTIFIC-CALCULATOR.git"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  GitHub Code
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
