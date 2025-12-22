import { useEffect } from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/profile.png";

export default function Home() {
  useEffect(() => {
    document.title = "Rajoli Srinivas | Full Stack Web Developer";
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
      disableMutationObserver: true,
    });
  }, []);

  return (
    <section className="home-hero d-flex align-items-center">
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">

          {/* PHOTO */}
          <div className="col-12 col-lg-4 text-center mb-4 mb-lg-0 order-1 order-lg-2">
            <div className="profile-square">
              <img
                src={profile}
                alt="Rajoli Srinivas - Full Stack Web Developer"
                className="profile-square-img"
                loading="eager"
                fetchpriority="high"
                width="320"
                height="380"
              />
            </div>

          </div>

          {/* CONTENT */}
          <div className="col-12 col-lg-8 text-center text-lg-start">

            <h1 className="fw-bold display-4 mb-2 text-white">
              Rajoli Srinivas
            </h1>

            <h4 className="fw-semibold mb-3 text-info">
              Full Stack Web Developer
            </h4>

            <p className="lead text-light mb-4">
              I build and deploy modern full-stack web applications with clean UI,
              scalable structure, and real-world problem-solving.
            </p>

            {/* CTA */}
            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start mb-5">
              <a href="/internship" className="btn btn-info btn-lg px-4">
                Internship Experience
              </a>
              <a href="/projects" className="btn btn-outline-light btn-lg px-4">
                View Projects
              </a>
            </div>

            {/* HIGHLIGHTS */}
            <div className="row g-4 justify-content-center justify-content-lg-start">
              {[
                { icon: <FaGraduationCap />, text: "MCA Graduate (2025)" },
                { icon: <FaLaptopCode />, text: "Full Stack Intern" },
                { icon: <FaRocket />, text: "3+ Deployed Projects" },
                { icon: <FaCode />, text: "React • Python • SQL" },
              ].map((item, i) => (
                <div className="col-6 col-md-3" key={i}>
                  <div className="hero-card p-4 h-100 text-center">
                    <div className="icon mb-2">{item.icon}</div>
                    <p className="fw-semibold mb-0">{item.text}</p>
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
