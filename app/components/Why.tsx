"use client";

import { ArrowRight } from "lucide-react";
import { benefits } from "./data";
import { scrollToSection as go } from "./scroll";

export default function Why() {
  return (
    <section id="why" className="section whySection">
      <div className="wrap whyGrid">
        <div>
          <div className="eyebrow">WHY IMMIGRA</div>
          <h2>
            Because important cases deserve <em>more than a template.</em>
          </h2>
          <p className="largeP">
            We built Immigra around a simple principle: professional evidence
            should be understood before it is written.
          </p>
          <button className="btn secondary" onClick={() => go("about")}>
            Meet Immigra
            <ArrowRight />
          </button>
        </div>

        <div className="benefitGrid">
          {benefits.map(([title, description], index) => (
            <div className="benefit" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
