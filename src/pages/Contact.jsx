import { useEffect } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaUserTie,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Rajoli Srinivas";
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
      disableMutationObserver: true,
    });
  }, []);

  return (
    <section className="contact-page">
      <div className="container py-5">

        {/* HEADER */}
        <div className="row mb-5">
          <div className="col text-center" data-aos="fade">
            <h2 className="fw-bold text-white display-6">
              <FaUserTie className="me-2 text-info" />
              Contact & Personal Information
            </h2>
            <p className="text-secondary mt-2">
              Open to full-time roles, internships, and collaborations
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10" data-aos="zoom-in">

            <div className="contact-wrapper">

              {/* LEFT – CONTACT DETAILS */}
              <div className="contact-column">
                <h5 className="section-heading">Contact Details</h5>

                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:srinivasrajoli2002@gmail.com">
                    srinivasrajoli2002@gmail.com
                  </a>
                </div>

                <div className="contact-item">
                  <FaPhoneAlt className="contact-icon" />
                  <a href="tel:+918712250191">
                    +91 87122 50191
                  </a>
                </div>

                <div className="contact-item">
                  <FaGithub className="contact-icon" />
                  <a
                    href="https://github.com/srinivas-191"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/srinivas-191
                  </a>
                </div>

                <div className="contact-item">
                  <FaLinkedin className="contact-icon" />
                  <a
                    href="https://www.linkedin.com/in/rajolisrinivas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/rajolisrinivas
                  </a>
                </div>
              </div>

              {/* RIGHT – LOCATION (TEXT ONLY) */}
              <div className="contact-column">
                <h5 className="section-heading">Location</h5>

                <div className="address-box">
                  <FaMapMarkerAlt className="address-icon" />
                  <p>
                    Kadapa District,
                    Andhra Pradesh,
                    India
                  </p>
                </div>

                <p className="address-note">
                  Willing to relocate or work remotely based on role requirements.
                </p>
              </div>

            </div>

            {/* FULL WIDTH MAP */}
            <div className="map-fullwidth mt-4">
              <iframe
                title="Kadapa Location"
                src="https://www.google.com/maps?q=Kadapa,Andhra%20Pradesh,India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
