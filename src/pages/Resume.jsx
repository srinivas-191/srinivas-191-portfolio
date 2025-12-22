import { useEffect, useState } from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Resume.css";

const Resume = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = "Resume | Rajoli Srinivas";

    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
      disableMutationObserver: true,
    });

    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const resumePath = "/resume/Srinivas Rajoli Full Stack Developer Resume(1).pdf";

  return (
    <section className="resume-page">
      <div className="container py-5">

        {/* HEADER */}
        <div className="row mb-4">
          <div className="col text-center" data-aos="fade">
            <h2 className="fw-bold text-white display-6">
              <FaFilePdf className="me-2 text-info" />
              Resume
            </h2>
            <p className="text-secondary mt-2">
              View or download my latest resume
            </p>
          </div>
        </div>

        {/* DOWNLOAD BUTTON */}
        <div className="row mb-4">
          <div className="col text-center" data-aos="fade">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info px-4 py-2"
            >
              <FaDownload className="me-2" />
              Download Resume
            </a>
          </div>
        </div>

        {/* DESKTOP PREVIEW */}
        {!isMobile && (
          <div className="row justify-content-center" data-aos="zoom-in">
            <div className="col-12 col-lg-10">
              <div className="resume-viewer resume-preview">
                <iframe
                  src={resumePath}
                  title="Rajoli Srinivas Resume"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}

        {/* MOBILE FALLBACK */}
        {isMobile && (
          <div className="text-center mt-4">
            <p className="text-secondary mb-3">
              Resume preview is optimized for desktop only.
            </p>

            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info btn-lg px-4"
            >
              Open / Download Resume
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default Resume;
