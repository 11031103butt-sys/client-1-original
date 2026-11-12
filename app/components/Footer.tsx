"use client";

import { useRouter } from "next/navigation";
import { scrollToSection as go } from "./scroll";
import Link from "next/link";

const serviceLinks = [
  "Expert Opinion Letters",
  "Recommendation Letters",
  "Credential Evaluations",
  "RFE Support"
];

const companyLinks = [
  { id: "why-immigra", label: "Why Immigra", type: "link", href: "/why-immigra" },
  { id: "about", label: "About", type: "link", href: "/about" },
  { id: "faq", label: "FAQ", type: "link", href: "/faq" },
  { id: "contact", label: "Contact", type: "scroll" }
];

export default function Footer() {
  const router = useRouter();

  const handleCompanyClick = (item: { id: string; type: string; href?: string }) => {
    if (item.type === "link" && item.href) {
      router.push(item.href);
    } else {
      go(item.id);
    }
  };

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
            <button key={label} onClick={() => router.push("/services")}>
              {label}
            </button>
          ))}
        </div>

        <div>
          <h4>Company</h4>
          {companyLinks.map((item) => (
            <button key={item.id} onClick={() => handleCompanyClick(item)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="wrap footerBottom">
        <span>© 2026 Immigra Evaluations. All rights reserved.</span>
        <span>
          <Link href="/privacy" className="hover:underline">Privacy</Link> ·{" "}
          <Link href="/terms" className="hover:underline">Terms</Link>
        </span>
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