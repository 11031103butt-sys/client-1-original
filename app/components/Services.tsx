"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { services } from "./data";

// Har card ko /services page ke sahi section se jorta hai
const sectionFor: Record<string, string> = {
  "Expert Opinion Letters": "expert-opinion-letters",
  "RFE / NOID Response": "rfe-noid-response",
  "Recommendation Letters": "recommendation-letters",
  "Position Evaluation": "additional-services",
  "Credential Evaluation": "additional-services",
  "Professional / Business Plans": "additional-services",
  "Petition Verification & Quality Review": "additional-services"
};

export default function Services() {
  const router = useRouter();

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
            From expert opinion and recommendation letters to RFE / NOID
            responses, evaluations and petition reviews, every service is built
            around your case.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            const target = sectionFor[service.title] ?? "";
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
                <button
                  type="button"
                  onClick={() => router.push(`/services#${target}`)}
                  aria-label={`See pricing for ${service.title}`}
                >
                  See pricing
                  <ArrowRight />
                </button>
              </article>
            );
          })}
        </div>

        <div className="center" style={{ marginTop: "40px", textAlign: "center" }}>
          <button
            type="button"
            className="ctaButton"
            onClick={() => router.push("/services")}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            View all services and pricing
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}