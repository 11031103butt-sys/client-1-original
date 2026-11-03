"use client";

import { ArrowRight, ShieldCheck, UsersRound } from "lucide-react";
import { scrollToSection as go } from "./scroll";

export default function SplitSection() {
  return (
    <section className="splitSection">
      <div className="wrap splitGrid">
        <div className="splitCopy">
          <div className="eyebrow">FOR A BRIGHTER TOMORROW</div>
          <h2>
            Your potential knows
            <em> no borders.</em>
          </h2>
          <p>
            Your education, research, leadership, innovation and professional
            achievements represent years of work. We help turn that record into
            clear, credible professional documentation.
          </p>
          <button className="btn primary" onClick={() => go("contact")}>
            Start Your Journey
            <ArrowRight />
          </button>
        </div>

        <div className="audienceBox">
          <div className="audience">
            <div className="audIcon">
              <ShieldCheck />
            </div>
            <div>
              <h3>I'm an Attorney</h3>
              <p>
                Partner with a specialized documentation provider for your
                clients.
              </p>
              <button onClick={() => go("contact")}>
                Attorney Services
                <ArrowRight />
              </button>
            </div>
          </div>

          <div className="divider" />

          <div className="audience">
            <div className="audIcon">
              <UsersRound />
            </div>
            <div>
              <h3>I'm a Petitioner</h3>
              <p>
                Get professional documentation tailored to your immigration
                matter.
              </p>
              <button onClick={() => go("contact")}>
                Get Started
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
