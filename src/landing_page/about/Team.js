import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-4 p-3">
        <h1 className="fs-1 text-center">People</h1>
      </div>

      <div className="row p-5 ">
        <div className="col-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-3">Kiran Ghale</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5 fs-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
