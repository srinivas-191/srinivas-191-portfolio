import { useEffect } from "react";
import {
  FaExchangeAlt,
  FaLock,
  FaDatabase,
  FaCloud,
  FaLightbulb,
  FaServer,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Backend.css";

const Backend = () => {
  useEffect(() => {
    document.title = "Backend Understanding | Rajoli Srinivas";
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
      disableMutationObserver: true,
    });
  }, []);

  const items = [
    {
      icon: <FaExchangeAlt />,
      title: "Client–Server Flow",
      text:
        "Understanding how frontend sends requests, backend processes logic, interacts with databases, and returns structured responses.",
    },
    {
      icon: <FaLock />,
      title: "Authentication",
      text:
        "Conceptual understanding of JWT, protected routes, tokens, and frontend auth flows.",
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      text:
        "SQL fundamentals, queries, joins, and how APIs expose controlled database data.",
    },
    {
      icon: <FaCloud />,
      title: "Deployment",
      text:
        "Environment variables, CORS issues, API base URLs, and production vs localhost behavior.",
    },
    {
      icon: <FaServer />,
      title: "API Handling",
      text:
        "Working with GET/POST requests, JSON responses, error handling, and async data flow.",
    },
    {
      icon: <FaLightbulb />,
      title: "Currently Learning",
      text:
        "Django REST Framework, API design, authentication workflows, backend security basics.",
    },
  ];

  return (
    <section className="backend-page">
      <div className="container py-5">

        {/* HEADER */}
        <div className="row mb-5">
          <div className="col text-center" data-aos="fade">
            <h2 className="fw-bold text-white display-6">
              Backend Understanding
            </h2>
            <p className="text-secondary mt-2">
              My conceptual understanding of backend systems
            </p>
          </div>
        </div>

        {/* CIRCULAR GRID */}
        <div className="backend-circle-grid">
          {items.map((item, i) => (
            <div
              key={i}
              className={`backend-circle`}
              data-aos="zoom-in"
            >
              <div className="circle-icon">{item.icon}</div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Backend;
