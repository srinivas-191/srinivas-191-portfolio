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
  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.from_name.value,
    email: form.from_email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("/api/sendMail", {
  method: "POST",                     
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, email, message }),
});

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

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
            {/* MESSAGE FORM */}
<div className="row justify-content-center mt-5">
  <div className="col-12 col-lg-8" data-aos="fade-up">
    <div className="contact-form-wrapper">
      <h5 className="section-heading text-center mb-4">
        Send Me a Message
      </h5>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="from_name"
            className="form-control custom-input"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="from_email"
            className="form-control custom-input"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            rows="4"
            className="form-control custom-input"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-info px-5">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
