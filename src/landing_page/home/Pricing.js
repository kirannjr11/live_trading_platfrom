import React from "react";
import { Link } from "react-router-dom";
function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount booking and price transparancy
            in Nepal. Flat fees and no hidden chargges
          </p>
          <Link to="/pricing">See Pricing</Link>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-2 border">
              <h1 className="mb-3">Rs 0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col p-2 border">
              <h1 className="mb-3">Rs 20</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
