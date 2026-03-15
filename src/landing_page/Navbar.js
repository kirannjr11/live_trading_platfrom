import React from "react";
import "../index.css"

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-4" href="https://www.google.com">
          <i className="bi bi-graph-up-arrow me-2"></i>
          Zerodha
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-3"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <a className="nav-link text-dark" href="https://www.google.com">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="https://www.google.com">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="https://www.google.com">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="https://www.google.com">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="https://www.google.com">Support</a>
            </li>
            <li className="nav-item d-flex align-items-center ms-2">
              <button className="btn border-0 p-0">
                <i className="bi bi-list fs-3 text-dark"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
