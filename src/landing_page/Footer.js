const Footer = () => {
  return (
    <footer className="bg-light border-top pt-5 pb-3 mt-5">
      <div className="container">

        {/* Main footer columns */}
        <div className="row mb-4 justify-content-between">

          {/* Brand + social */}
          <div className="col-lg-3 col-md-6 mb-4">
            <a className="navbar-brand fw-bold text-primary fs-4 mb-3 d-block" href="https://www.google.com">
              <i className="bi bi-graph-up-arrow me-2"></i>
              ZERODHA
            </a>
            <p className="text-muted small">
              &copy; 2010 - 2026, Zerodha Broking Ltd.<br />All rights reserved.
            </p>

            {/* Social icons row 1 */}
            <div className="d-flex gap-3 mb-2">
              <a href="https://www.twitter.com" className="text-dark fs-5"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.facebook.com" className="text-dark fs-5"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com" className="text-dark fs-5"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com" className="text-dark fs-5"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>

            {/* Social icons row 2 */}
            <div className="d-flex gap-3 mb-4">
              <a href="https://www.youtube.com" className="text-dark fs-5"><i className="fa-brands fa-youtube"></i></a>
              <a href="https://www.whatsapp.com" className="text-dark fs-5"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="https://www.telegram.org" className="text-dark fs-5"><i className="fa-brands fa-telegram"></i></a>
            </div>

            {/* App store buttons */}
            <div className="d-flex gap-2">
              <a href="https://play.google.com" className="btn btn-outline-dark btn-sm d-flex align-items-center gap-1 px-2 py-1">
                <i className="fa-brands fa-google-play"></i>
                <span className="small lh-1 text-start">
                  <span style={{fontSize:"0.6rem"}}>GET IT ON</span><br/>
                  <strong>Google Play</strong>
                </span>
              </a>
              <a href="https://www.apple.com/app-store/" className="btn btn-outline-dark btn-sm d-flex align-items-center gap-1 px-2 py-1">
                <i className="fa-brands fa-apple"></i>
                <span className="small lh-1 text-start">
                  <span style={{fontSize:"0.6rem"}}>Download on the</span><br/>
                  <strong>App Store</strong>
                </span>
              </a>
            </div>
          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Account</h6>
            <ul className="list-unstyled">
              {["Open demat account","Minor demat account","NRI demat account","HUF demat account","Commodity","Dematerialisation","Fund transfer","MTF"].map(item => (
                <li key={item} className="mb-2">
                  <a href="https://www.google.com" className="text-muted text-decoration-none small">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled">
              {["Contact us","Support portal","How to file a complaint?","Status of your complaints","Bulletin","Circular","Z-Connect blog","Downloads"].map(item => (
                <li key={item} className="mb-2">
                  <a href="https://www.google.com" className="text-muted text-decoration-none small">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled">
              {["About","Philosophy","Press & media","Careers","Zerodha Cares (CSR)","Zerodha.tech","Open source","Referral program"].map(item => (
                <li key={item} className="mb-2">
                  <a href="https://www.google.com" className="text-muted text-decoration-none small">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Quick links</h6>
            <ul className="list-unstyled">
              {["Upcoming IPOs","Brokerage charges","Market holidays","Economic calendar","Calculators","Markets","Sectors","Gift Nifty"].map(item => (
                <li key={item} className="mb-2">
                  <a href="https://www.google.com" className="text-muted text-decoration-none small">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal text */}
        <div className="border-top pt-4">
          <p className="text-muted small">
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p className="text-muted small">
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p className="text-muted small">
            <a href="https://www.google.com" className="text-primary text-decoration-none">Smart Online Dispute Resolution</a>
            {" | "}
            <a href="https://www.google.com" className="text-primary text-decoration-none">Grievances Redressal Mechanism</a>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-top pt-3 d-flex flex-wrap justify-content-center gap-3">
          {["NSE","BSE","MCX","Terms & conditions","Policies & procedures","Privacy policy","Disclosure","For investor's attention","Investor charter"].map(item => (
            <a key={item} href="https://www.google.com" className="text-muted text-decoration-none small">{item}</a>
          ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer
