"use client";

import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { scrollToSection as go } from "./scroll";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap heroGrid">
        <div className="heroText">
          <div className="eyebrow">
            PROFESSIONAL DOCUMENTATION · REAL OPPORTUNITIES
          </div>

          <h1>
            Expert evidence for your <em>U.S. immigration journey.</em>
          </h1>

          <p className="lead">
            Expert opinion letters, recommendation letters, credential
            evaluations, position evaluations and RFE support — prepared around
            the evidence that matters to your case.
          </p>

          <div className="buttons">
            <button className="btn primary" onClick={() => go("contact")}>
              Start Your Case
              <ArrowRight size={18} />
            </button>
            <button className="btn secondary" onClick={() => go("services")}>
              View Our Services
            </button>
          </div>

          <div className="heroChecks">
            <span><Check />USCIS-focused documentation*</span>
            <span><Check />AACRAO EDGE methodology*</span>
            <span><Check />Field-specific expertise</span>
            <span><Check />Confidential handling</span>
          </div>
        </div>

        <div className="heroImage">
          <div className="imageGlow" />
          <img
            src="/immigra-hero.png"
            alt="Professional woman representing the professionals Immigra serves"
          />
          <div className="imageOverlay" />

          <div className="heroQuote">
            Your expertise deserves
            <br />
            documentation that
            <br />
            tells the full story.
          </div>

          <div className="heroBadge">
            <div>
              <ShieldCheck />
            </div>
            <span>
              <b>Evidence-led documentation</b>
              <small>Professional support for your case</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
