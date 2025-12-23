import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import doll404 from "../assets/404-doll.jpg";

export default function NotFound() {
    useEffect(() => {
    document.title = "404 – Page Not Found | Rajoli Srinivas";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta(
      "description",
      "404 error – The page you are looking for does not exist. Visit Rajoli Srinivas' portfolio homepage."
    );
    setMeta("robots", "noindex, nofollow");
    setMeta("googlebot", "noindex, nofollow");
  }, []);

  return (
    <section className="notfound-page">
      <div className="container">
        <div className="row align-items-center notfound-row">

          {/* LEFT EMPTY SPACE (BALANCE) */}
          <div className="col-lg-2 d-none d-lg-block"></div>

          {/* CONTENT */}
          <div className="col-12 col-lg-5 notfound-content">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>

            <p className="error-desc">
              Looks like the page you’re trying to access doesn’t exist or was
              moved. Don’t worry — it happens even to the best explorers.
            </p>

            <p className="error-desc subtle">
              Let’s get you back on track to something useful.
            </p>

            <Link to="/" className="btn btn-info px-4 mt-2">
              Go Back Home
            </Link>
          </div>

          {/* IMAGE */}
          <div className="col-12 col-lg-5 text-center">
            <div className="doll-wrapper">

              {/* 404 BOARD */}
              <div className="error-board-top">
                404 Error — Page Missing
              </div>

              <img
                src={doll404}
                alt="404 Error Illustration"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
