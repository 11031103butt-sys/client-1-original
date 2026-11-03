"use client";

import { useState } from "react";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { microPrices, pricing, pricingTabs } from "./data";
import { scrollToSection as go } from "./scroll";

export default function Pricing() {
  const [serviceTab, setServiceTab] = useState("Expert Opinion Letters");

  return (
    <section id="pricing" className="section pricingSection">
      <div className="wrap">
        <div className="center">
          <div className="eyebrow">POPULAR SERVICES & PRICING</div>
          <h2>
            Transparent pricing.
            <em> Flexible options.</em>
          </h2>
          <p>
            Choose the level of support that fits the complexity and timing of
            your documentation need.
          </p>
        </div>

        <div className="tabs">
          {pricingTabs.map((tab) => (
            <button
              key={tab}
              className={serviceTab === tab ? "active" : ""}
              onClick={() => setServiceTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="pricingGrid">
          {pricing.map((plan) => (
            <article
              className={plan.popular ? "priceCard popularCard" : "priceCard"}
              key={plan.name}
            >
              {plan.popular && <div className="popularTag">MOST REQUESTED</div>}

              <h3>{plan.name}</h3>

              <div className="bigPrice">
                {plan.price}
                <small>starting</small>
              </div>

              <div className="time">
                <Clock3 />
                {plan.time}
              </div>

              <p>{plan.desc}</p>

              <div className="features">
                {plan.features.map((feature) => (
                  <span key={feature}>
                    <Check />
                    {feature}
                  </span>
                ))}
              </div>

              <button onClick={() => go("contact")}>
                {plan.popular ? "Choose Professional" : "Get Started"}
                <ArrowRight />
              </button>
            </article>
          ))}
        </div>

        <div className="microPrices">
          {microPrices.map(([label, price]) => (
            <div key={label}>
              <b>{label}</b>
              <span>{price}</span>
            </div>
          ))}
        </div>

        <p className="note">
          *Final pricing depends on service type, complexity, expert
          availability and turnaround. A written scope is confirmed before work
          begins.
        </p>
      </div>
    </section>
  );
}
