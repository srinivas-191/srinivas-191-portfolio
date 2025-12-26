import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    ["About", "/about"],
    ["Skills", "/skills"],
    ["Projects", "/projects"],
    ["Internship", "/internship"],
    ["Backend", "/backend-understanding"],
    ["Resume", "/resume"],
    ["Personal Details", "/personal-details"],
    ["Contact", "/contact"],
  ];

  return (
    <nav
      className="fixed-top p-3"
      style={{
        background: "linear-gradient(90deg, #1f2933, #111827)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
        zIndex: 1050,
      }}
    >
      <div className="container d-flex align-items-center justify-content-between py-3">

        {/* BRAND */}
        <NavLink
          to="/"
          className="fw-bold fs-4 text-decoration-none"
          style={{ color: "#38bdf8" }}
          onClick={() => setOpen(false)}
        >
          Rajoli Srinivas
        </NavLink>

        {/* DESKTOP NAV */}
        <ul className="d-none d-lg-flex list-unstyled mb-0 gap-4 align-items-center">
          {navLinks.map(([label, path]) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  ` py-2 rounded text-decoration-none ${
                    isActive ? "active-link" : "inactive-link"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          className="d-lg-none bg-transparent border-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <FaTimes size={24} color="#e5e7eb" />
          ) : (
            <FaBars size={24} color="#e5e7eb" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="d-lg-none"
          style={{
            background: "#020617",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <ul className="list-unstyled mb-0 py-3">
            {navLinks.map(([label, path]) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setOpen(false)}   // ✅ CLOSES MENU
                  className={({ isActive }) =>
                    `d-block px-4 py-3 text-decoration-none ${
                      isActive ? "active-link" : "inactive-link"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
