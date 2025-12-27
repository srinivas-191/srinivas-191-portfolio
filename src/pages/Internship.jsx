import { useEffect } from "react";
import {
  FaBriefcase,
  FaLaptopCode,
  FaChartBar,
  FaBrain,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Internship.css"

const certificates = {
  fullStack: false, // ❌ not available yet
  dataAnalytics: true,
  dataScience: true,
};

const Internship = () => {
  useEffect(() => {
    document.title = "Internship Experience | Rajoli Srinivas";

    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      disableMutationObserver: true, // prevents layout reflow glitches
    });
  }, []);

  return (
    <section className="internship-page">
      <div className="container py-5">

        {/* PAGE HEADER */}
        <div className="row mb-5">
          <div className="col text-center" data-aos="fade">
            <h2 className="fw-bold text-white display-6">
              <FaBriefcase className="me-2 text-info" />
              Internship Experience
            </h2>
            <p className="text-secondary mt-2">
              Practical industry exposure and hands-on learning
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">

          {/* INTERNSHIP 1 */}
          <div className="col-12 col-xl-4" data-aos="zoom-in">
            <div className="internship-card">
              <div className="internship-icon">
                <FaLaptopCode />
              </div>

              <h5 className="fw-bold">
                Full Stack Web Development Intern
              </h5>
              <p className="text-info mb-1">Social Prachar</p>
              <p className="text-secondary small">
                April 2025 – Present
              </p>

              <ul className="internship-list">
                <li>
                  Designed and developed effective dashboards and webpages with
                  secure access control.
                </li>
                <li>
                  Built responsive UI components and interactive charts to
                  enhance user experience.
                </li>
                <li>
                  Integrated frontend with backend APIs and optimized API
                  performance.
                </li>
                <li>
                  Improved application performance and usability through UI
                  and logic refinements.
                </li>
              </ul>
              
                {certificates.fullStack ? (
                    <div className="certificate-wrapper">
                      <img
                        src="/Internships/Full_Stack_Web_Development_Internship.png"
                        alt="Full Stack Internship Certificate"
                        loading="lazy"
                        className="certificate-preview"
                      />

                      <a
                        href="/Internships/Full_Stack_Web_Development_Internship.pdf"
                        download
                        className="certificate-download"
                        title="Download Certificate"
                      >
                        ⬇
                      </a>
                    </div>
                  ) : (
                    <div className="certificate-placeholder">
                      <span className="certificate-text">
                        Certificate<br />Coming Soon
                      </span>
                    </div>
                  )}
            </div>
          </div>

          {/* INTERNSHIP 2 */}
          <div className="col-12 col-xl-4" data-aos="zoom-in">
            <div className="internship-card">
              <div className="internship-icon">
                <FaChartBar />
              </div>

              <h5 className="fw-bold">
                Data Analytics Intern
              </h5>
              <p className="text-info mb-1">Besant Technologies</p>
              <p className="text-secondary small">
                October 2025 – November 2025
              </p>

              <ul className="internship-list">
                <li>
                  Gained hands-on experience with SQL queries and database
                  operations.
                </li>
                <li>
                  Worked on Power BI dashboards for data visualization.
                </li>
                <li>
                  Performed data analysis tasks to derive meaningful insights
                  from datasets.
                </li>
                <li>
                  Improved analytical thinking and data interpretation skills.
                </li>
              </ul>
              {/* CERTIFICATE PREVIEW */}
                {certificates.dataAnalytics ? (
                    <div className="certificate-wrapper">
                      <img
                        src="/Internships/Data_Analytics_Certificate.jpeg"
                        alt="Data Analytics Certificate"
                        loading="lazy"
                        className="certificate-preview"
                      />

                      <a
                        href="/Internships/Data_Analytics_Certificate.jpeg"
                        download
                        className="certificate-download"
                        title="Download Certificate"
                      >
                        ⬇
                      </a>
                    </div>
                  ) : (
                    <div className="certificate-placeholder">
                      <span className="certificate-text">
                        Certificate<br />Coming Soon
                      </span>
                    </div>
                  )}

            </div>
          </div>

          {/* INTERNSHIP 3 */}
          <div className="col-12 col-xl-4" data-aos="zoom-in">
            <div className="internship-card">
              <div className="internship-icon">
                <FaBrain />
              </div>

              <h5 className="fw-bold">
                Data Science & AIML Intern
              </h5>
              <p className="text-info mb-1">YBI Foundations</p>
              <p className="text-secondary small">
                September 2024 – October 2024
              </p>

              <ul className="internship-list">
                <li>
                  Built a strong foundation in data science and AI/ML concepts.
                </li>
                <li>
                  Worked on problem-solving tasks using analytical approaches.
                </li>
                <li>
                  Enhanced understanding of applying AI/ML concepts to
                  real-world scenarios.
                </li>
                <li>
                  Strengthened discipline and consistency in learning complex
                  technical topics.
                </li>
              </ul>
              {/* CERTIFICATE PREVIEW */}
              {certificates.dataScience ? (
                    <div className="certificate-wrapper">
                      <img
                        src="/Internships/Data_Science_And_AIML_Internship.png"
                        alt="Full Stack Internship Certificate"
                        loading="lazy"
                        className="certificate-preview"
                      />

                      <a
                        href="/Data_Science_and_AIML_Internship_Certificate.pdf"
                        download
                        className="certificate-download"
                        title="Download Certificate"
                      >
                        ⬇
                      </a>
                    </div>
                  ) : (
                    <div className="certificate-placeholder">
                      <span className="certificate-text">
                        Certificate<br />Coming Soon
                      </span>
                    </div>
                  )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship;
