import React from "react";
import "../App.css";

function Navbar({ setShowModal }) {
  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white shadow-sm">
      <div className="container">
        {/* Logo & Brand */}
        <a
          className="navbar-brand fw-bold text-primary d-flex align-items-center"
          href="#">
          <img
            src="pic.jpg"
            width="60"
            height="60"
            style={{ borderRadius: "60%" }}
          />
          PortFolio
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              {/* Contact Button Opens Modal */}
              <button
                className="nav-link text-dark fw-semibold border-0 bg-transparent"
                onClick={() => setShowModal(true)}>
                Contact
              </button>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary px-3 ms-2" href="#hire-me">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
