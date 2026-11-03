"use client";

import { ArrowRight } from "lucide-react";
import { services } from "./data";
import { scrollToSection as go } from "./scroll";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="sectionIntro">
          <div>
            <div className="eyebrow">OUR SERVICES</div>
            <h2>
              Comprehensive documentation for <em>U.S. immigration.</em>
            </h2>
          </div>
          <p>
            From a single expert opinion to complex RFE documentation, every
            engagement is scoped around your actual professional and
            evidentiary needs.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="serviceCard" key={service.title}>
                <div className="serviceIcon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <div className="chips">
                  {service.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
                <button onClick={() => go("contact")}>
                  Learn More
                  <ArrowRight />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
