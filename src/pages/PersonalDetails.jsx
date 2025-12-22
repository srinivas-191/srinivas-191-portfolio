import { useEffect } from "react";
import {
  FaUser,
  FaNewspaper,
  FaMusic,
  FaChess,
  FaBaseballBatBall,
  FaUsers,
  FaComments,
  FaCompass,
  FaCircleCheck,
  FaToolbox,
  FaHourglassHalf,
  FaRedhat,
  FaHeart
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  useEffect(() => {
  document.title = "Personal Details | Rajoli Srinivas";
  AOS.init({
    duration: 500,
    once: true,
    easing: "ease-out",
    offset: 80,              // prevents early triggering
    disableMutationObserver: true,
    anchorPlacement: "top-bottom",
  });
}, []);

  return (
    <section className="personal-page">
      <div className="container py-5">

        {/* HEADER */}
        <div className="row mb-5">
          <div className="col text-center" data-aos="fade">
            <h2 className="fw-bold text-white display-6">
              <FaUser className="me-2 text-info" />
              Personal Details
            </h2>
            <p className="text-secondary mt-2">
              Interests and habits beyond academics and development
            </p>
          </div>
        </div>

        {/* HOBBIES */}
        <div className="row mb-4">
          <div className="col text-center">
            <h4 className="section-title">Hobbies & Interests</h4>
          </div>
        </div>

        <div className="row g-4 justify-content-center">

          <div className="col-12 col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="personal-card">
              <FaBaseballBatBall className="personal-icon" />
              <h6>Analyzing Sports</h6>
              <p>
                Enjoy analyzing matches, player strategies, and game patterns.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="personal-card">
              <FaNewspaper className="personal-icon" />
              <h6>Browsing Daily News</h6>
              <p>
                Stay updated with current affairs, technology, and industry
                trends.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="personal-card">
              <FaMusic className="personal-icon" />
              <h6>Listening to Music</h6>
              <p>
                Listen to music to relax, improve focus, and maintain balance.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" data-aos="zoom-in">
            <div className="personal-card">
              <FaChess className="personal-icon" />
              <h6>Playing Ludo</h6>
              <p>
                Enjoy board games that involve patience, strategy, and planning.
              </p>
            </div>
          </div>

        </div>
        {/* STRENGTHS */}
<div className="row mt-5 mb-4">
  <div className="col text-center">
    <h4 className="section-title">Strengths</h4>
  </div>
</div>

<div className="row g-4 justify-content-center">

  <div className="col-12 col-md-6 col-lg-3" data-aos="fade">
    <div className="personal-card">
      <FaUsers className="personal-icon" />
      <h6>Collaborative</h6>
      <p>
        Comfortable working with teams, sharing ideas, and supporting
        collective goals effectively.
      </p>
    </div>
  </div>

  <div className="col-12 col-md-6 col-lg-3" data-aos="fade">
    <div className="personal-card">
      <FaComments className="personal-icon" />
      <h6>Straightforward Approach</h6>
      <p>
        Communicate ideas clearly and prefer simple, direct solutions
        over unnecessary complexity.
      </p>
    </div>
  </div>

  <div className="col-12 col-md-6 col-lg-3" data-aos="fade">
    <div className="personal-card">
      <FaCompass className="personal-icon" />
      <h6>Explorative Thinking</h6>
      <p>
        Enjoy exploring multiple approaches and tools before finalizing
        an implementation.
      </p>
    </div>
  </div>

  <div className="col-12 col-md-6 col-lg-3" data-aos="fade">
    <div className="personal-card">
      <FaCircleCheck className="personal-icon" />
      <h6>Decision Making</h6>
      <p>
        Analyze available options carefully and choose solutions that
        balance practicality and impact.
      </p>
    </div>
  </div>

  <div className="col-12 col-md-6 col-lg-3" data-aos="fade">
  <div className="personal-card">
    <FaToolbox className="personal-icon" />
    <h6>Practical Mindset</h6>
    <p>
      Prefer practical and workable solutions, focusing on what can be
      implemented effectively rather than just theoretical ideas.
    </p>
  </div>
</div>

<div className="col-12 col-md-6 col-lg-3" data-aos="fade">
  <div className="personal-card">
    <FaHourglassHalf className="personal-icon" />
    <h6>Patience Under Pressure</h6>
    <p>
      Maintain patience and composure when facing challenges, feedback,
      or unexpected results, and continue improving steadily.
    </p>
  </div>
</div>


</div>

        
{/* AREAS TO IMPROVE */}
<div className="row mt-5 mb-4">
  <div className="col text-center">
    <h4 className="section-title">Areas I’m Actively Improving</h4>
  </div>
</div>

<div className="row g-4 justify-content-center">

  <div className="col-12 col-md-6 col-lg-5" data-aos="fade">
    <div className="personal-card">
      <FaRedhat className="personal-icon" />
      <h6>Learning Through Repetition</h6>
      <p>
        I prefer reinforcing new concepts through continuous practice rather
        than relying on single attempts. To improve retention, I actively
        revise key learnings using personal notes and visual reminders.
      </p>
    </div>
  </div>

  <div className="col-12 col-md-6 col-lg-5" data-aos="fade">
    <div className="personal-card">
      <FaHeart className="personal-icon" />
      <h6>Emotional Awareness</h6>
      <p>
        I am emotionally aware and sometimes internalize outcomes deeply.
        I am learning to balance emotions with logic, especially during
        challenging situations and feedback-driven environments.
      </p>
    </div>
  </div>

</div>

      </div>
    </section>
  );
};

export default PersonalDetails;
