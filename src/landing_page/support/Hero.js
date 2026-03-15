import React from "react";

function Hero() {
  return (
    <section style={{ backgroundColor: "#387ED1" }} className="py-4">
      <div className="container">
        {/* Support Portal heading + My tickets button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0 text-white">Support Portal</h2>
          <a href="" className="btn btn-light px-4 fw-semibold" style={{ color: "#387ED1" }}>My tickets</a>
        </div>

        {/* Search Bar */}
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control form-control-lg border-start-0"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
