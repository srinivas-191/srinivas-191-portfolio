import { useEffect } from "react";
import {
  FaWallet,
  FaLayerGroup,
  FaTrashAlt,
  FaChartPie,
  FaLightbulb,
  FaExternalLinkAlt,
  FaGithub,
  FaEdit,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "bootstrap";

import img1 from "../assets/expenses/expenses-1.png";
import img2 from "../assets/expenses/expenses-2.png";
import img3 from "../assets/expenses/expenses-3.png";
import img4 from "../assets/expenses/expenses-4.png";
import img5 from "../assets/expenses/expenses-5.png";

export default function Expenses() {
  useEffect(() => {
    document.title = "Multi-Board Expense Tracker | Rajoli Srinivas";
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
    const el = document.querySelector("#expensesCarousel");
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
              <FaWallet className="me-2 text-info" />
              Multi-Board Expense Tracker
            </h2>
            <p className="text-secondary mt-2">
              Personal Finance Management System with task-isolated boards, visual analytics, and trash recovery
            </p>
          </div>
        </div>

        {/* SCREENSHOT CAROUSEL */}
        <div className="row mb-5" data-aos="zoom-in">
          <div className="col-12 col-lg-10 mx-auto px-0">
            <div
              id="expensesCarousel"
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
                        alt={`Expense Tracker Screenshot ${i + 1}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}

              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#expensesCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#expensesCarousel"
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
                <FaLayerGroup /> Project Overview
              </h5>
              <p>
                A fully frontend React application for managing personal finances
                across multiple task boards — each board (trip, project, monthly
                budget) maintains its own completely isolated expense list. The
                app features animated card dashboards, real-time pie chart
                analytics, a soft-delete trash system with full recovery, and
                per-entry edit and delete controls.
              </p>
            </div>

            {/* MULTI-BOARD SYSTEM */}
            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaLayerGroup /> Multi-Board Task System
              </h5>
              <ul>
                <li>Create unlimited named task boards (trips, budgets, projects)</li>
                <li>Each board stores expenses under a unique <code>expenses_&#123;taskId&#125;</code> localStorage key</li>
                <li>Colorful gradient cards with spring-physics hover animations</li>
                <li>Cards ordered by creation date — oldest to latest</li>
                <li>Slide-in panel on card click with Add Expenses and View Tracker actions</li>
              </ul>
            </div>

            {/* EXPENSE MANAGEMENT */}
            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaEdit /> Expense Management Features
              </h5>
              <ul>
                <li>Add expenses with description, amount (₹), and category</li>
                <li>Edit any entry via pre-filled modal — description, amount, category</li>
                <li>Delete individual entries instantly with dustbin button</li>
                <li>Duplicate detection for same-day, same-category entries with merge-or-cancel prompt</li>
                <li>Expenses sorted by most recently added at the top</li>
              </ul>
            </div>

            {/* TRACKER & ANALYTICS */}
            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaChartPie /> Tracker & Visual Analytics
              </h5>
              <ul>
                <li>SVG-based animated pie chart showing spending breakdown by category</li>
                <li>Top spending categories ranked with highlight for top 3</li>
                <li>All expenses listed sorted by highest amount</li>
                <li>Click-to-expand rows revealing individual occurrence details</li>
                <li>Real-time sync via custom browser <code>expensesUpdated</code> events</li>
              </ul>
            </div>

            {/* TRASH SYSTEM */}
            <div className="project-section mb-4">
              <h5 className="section-title">
                <FaTrashAlt /> Trash & Recovery System
              </h5>
              <ul>
                <li>Soft-delete moves task to trash with a deletion timestamp</li>
                <li>Recover restores the task to its original creation-date position on the home page</li>
                <li>Permanent delete wipes the task and all its expense data from localStorage</li>
                <li>Trash page mirrors the home page card grid layout</li>
              </ul>
            </div>

            {/* LEARNINGS */}
            <div className="project-section">
              <h5 className="section-title">
                <FaLightbulb /> Key Learnings
              </h5>
              <ul>
                <li>Architecting scalable client-side state with per-entity localStorage keys</li>
                <li>Cross-component communication using custom browser events</li>
                <li>Building animated, responsive UI with CSS custom properties and AOS</li>
                <li>Implementing soft-delete and recovery patterns without a backend</li>
                <li>SVG pie chart rendering and dynamic stroke-dasharray calculations</li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-12 col-lg-4" data-aos="fade-left">
            <div className="project-sidebar">

              <h6 className="fw-bold mb-3">Tech Stack</h6>
              <ul className="tech-list">
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>React Router DOM</li>
                <li>AOS (Animate on Scroll)</li>
                <li>CSS3 Custom Properties</li>
                <li>localStorage API</li>
                <li>Vite</li>
              </ul>

              <div className="feature-badges mt-3">
                <span><FaLayerGroup /> Multi-Board</span>
                <span><FaChartPie /> Pie Chart</span>
                <span><FaTrashAlt /> Trash & Recovery</span>
                <span><FaEdit /> Edit & Delete</span>
              </div>

              {/* LINKS */}
              <div className="d-grid gap-2 mt-4">
                <a
                  href="https://expenses-tracker-smoky-mu.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  Live Demo <FaExternalLinkAlt className="ms-2" />
                </a>

                <a
                  href="https://github.com/srinivas-191/expenses-tracker"
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
