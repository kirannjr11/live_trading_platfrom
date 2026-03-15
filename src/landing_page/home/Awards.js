import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6">
          <h1>Largest stock broker in Nepal</h1>
          <p className="mb-3">
            2M+ Korex xlients contribution to iver 15% of all retail order
            volumes in Nepal daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>

                <li>
                  <p>Commodity derivatives</p>
                </li>

                <li>
                  <p>Currency dervatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>

                <li>
                  <p>Direct mutual funds</p>
                </li>

                <li>
                  <p>Bonds and Govt. Securities </p>
                </li>
              </ul>
            </div>

            <img src="media/images/pressLogos.png" alt="awardImae" style={{width:"90%"}} className="mt-2"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
