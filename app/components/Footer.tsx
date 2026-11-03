"use client";

import { scrollToSection as go } from "./scroll";

const serviceLinks = [
  "Expert Opinion Letters",
  "Recommendation Letters",
  "Credential Evaluations",
  "RFE Support"
];

const companyLinks = [
  ["why", "Why Immigra"],
  ["about", "About"],
  ["faq", "FAQ"],
  ["contact", "Contact"]
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footerGrid">
        <div>
          <button className="logo footerLogo" onClick={() => go("home")}>
            <span className="logoIcon">IE</span>
            <span className="logoWords">
              <b>IMMIGRA</b>
              <small>EVALUATIONS</small>
            </span>
          </button>
          <p>Expert documentation for U.S. immigration.</p>
        </div>

        <div>
          <h4>Services</h4>
          {serviceLinks.map((label) => (
            <button key={label} onClick={() => go("services")}>
              {label}
            </button>
          ))}
        </div>

        <div>
          <h4>Company</h4>
          {companyLinks.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="wrap footerBottom">
        <span>© 2026 Immigra Evaluations. All rights reserved.</span>
        <span>Privacy · Terms</span>
      </div>

      <div className="wrap disclaimer">
        *Business-specific statistics and claims should only be published after
        they have been verified and can be substantiated. References to USCIS
        compliance must not imply USCIS endorsement, certification or approval.
        AACRAO EDGE references should only be used for applicable credential
        evaluation services actually performed using the relevant methodology.
        Immigra Evaluations does not guarantee an immigration outcome and does
        not provide legal representation unless separately stated by a properly
        licensed attorney.
      </div>
    </footer>
  );
}
