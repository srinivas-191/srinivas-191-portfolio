import { useEffect } from "react";
import {
  FaUserGraduate,
  FaLayerGroup,
  FaServer,
  FaChartLine,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    document.title = "About Me | Rajoli Srinivas";
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="about-page d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">

          {/* PAGE HEADING */}
          <div
            className="col-12 col-lg-10 text-center mb-5"
            data-aos="fade-down"
          >
            <h2 className="fw-bold text-white display-6">About Me</h2>
            <p className="text-secondary mt-2">
              Who I am, what I work on, and how I’m growing as a developer
            </p>
          </div>

          {/* CONTENT CARD */}
          <div className="col-12 col-lg-10">
            <div className="about-card p-4 p-md-5" data-aos="fade-up">

              {/* SECTION 1 */}
              <div className="about-section mb-4">
                <div className="icon-box">
                  <FaLayerGroup />
                </div>
                <p>
                  I am a <strong>Full Stack Web Developer (React, Python, SQL)</strong> with
                  hands-on experience in building and deploying real-world web
                  applications. I work comfortably across the frontend and backend,
                  focusing on clean user interfaces, logical data flow, and
                  practical implementation.
                </p>
              </div>

              {/* SECTION 2 */}
              <div className="about-section mb-4" data-aos="fade-right">
                <div className="icon-box">
                  <FaServer />
                </div>
                <p>
                  I am currently strengthening my backend skills in
                  <strong> Python, Django, and REST APIs</strong>, while also
                  building foundational knowledge in <strong>Data Science</strong> to
                  better understand data-driven applications. Through projects
                  and internships, I have gained experience integrating frontend
                  components with backend services and deploying applications
                  to production environments.
                </p>
              </div>

              {/* SECTION 3 */}
              <div className="about-section" data-aos="fade-left">
                <div className="icon-box">
                  <FaUserGraduate />
                </div>
                <p>
                  I recently completed my <strong>MCA (2025)</strong> and am currently
                  working as a <strong>Full Stack Web Development Intern</strong>,
                  where I actively contribute to dashboards, API integration,
                  and performance-focused UI improvements. I believe in
                  continuous learning and improving my backend depth while
                  delivering complete, working solutions.
                </p>
              </div>

            </div>
          </div>

          {/* QUICK HIGHLIGHTS */}
          <div className="col-12 col-lg-10 mt-5">
            <div className="row g-4 text-center">

              {[
                { icon: <FaUserGraduate />, label: "MCA Graduate (2025)" },
                { icon: <FaLayerGroup />, label: "Full Stack Development" },
                { icon: <FaServer />, label: "Backend Learning (Django, APIs)" },
                { icon: <FaChartLine />, label: "Data-Driven Thinking" },
              ].map((item, i) => (
                <div
                  className="col-6 col-md-3"
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 120}
                >
                  <div className="about-highlight">
                    <div className="highlight-icon">{item.icon}</div>
                    <p className="mb-0 fw-semibold">{item.label}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
