import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary fs-4" to="/">
          <i className="bi bi-graph-up-arrow me-2"></i>
          Zerodha
        </Link>
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
              <Link className="nav-link text-dark" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/support">Support</Link>
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
