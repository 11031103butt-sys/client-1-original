"use client";

import { useState } from "react";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import Link from "next/link";
import { pricingData, pricingTabs } from "./pricedata";
import { scrollToSection as go } from "./scroll";

export default function Pricing() {
  const [serviceTab, setServiceTab] = useState(pricingTabs[0]);

  const category =
    pricingData.find((c) => c.tab === serviceTab) ?? pricingData[0];

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
            Professionally prepared immigration documentation designed to
            clearly present your qualifications, achievements, and supporting
            evidence.
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

        {/* Category ki intro */}
        <div className="center categoryIntro">
          <h3>{category.tagline}</h3>
          {category.desc && <p>{category.desc}</p>}
          {category.categories && (
            <p className="supported">
              <b>Categories supported:</b> {category.categories}
            </p>
          )}
        </div>

        <div className="pricingGrid">
          {category.items.map((item) => {
            const isQuote = !item.price;

            return (
              <article className="priceCard" key={item.name}>
                <h3>{item.name}</h3>

                <div className="bigPrice">
                  {item.price ?? "Custom Quote"}
                  {item.price && <small>standard</small>}
                </div>

                {category.time && (
                  <div className="time">
                    <Clock3 />
                    {category.time}
                  </div>
                )}

                {/* Card ki apni detail, warna category ki */}
                <p>{item.desc ?? category.desc}</p>

                {category.features.length > 0 && (
                  <div className="features">
                    {category.features.map((feature) => (
                      <span key={feature}>
                        <Check />
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {isQuote && (
                  <p className="quoteNote">
                    Please contact us for a personalized quote by filling in
                    the form.
                  </p>
                )}

                {/* agar quote chahiye to contact section, warna /services page */}
                {isQuote ? (
                  <button onClick={() => go("contact")}>
                    Request a Quote
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <Link
  href={`/services/${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, "-"))}`}
  className="btn"
  style={{ textDecoration: "none" }}
>
  Get Started
  <ArrowRight size={16} />
</Link>
                )}
              </article>
            );
          })}
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