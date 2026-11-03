"use client";

import { ArrowRight, Check, Clock3 } from "lucide-react";
import Link from "next/link";
import { pricingData } from "@/app/components/pricedata"; // اپنے pricedata کا صحیح پاتھ چیک کر لیں
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { scrollToSection as go } from "@/app/components/scroll";

export default function Services() {
  // نام کو کلین سلگ بنانے کا فنکشن
  const slugify = (text: string) =>
    text.toLowerCase().replace(/,/g, "").replace(/\s+/g, "-");

  return (
    <>
      <Header />
      <section id="services" className="section servicesSection">
        <div className="wrap">
          {/* Header Section */}
          <div className="center">
            <div className="eyebrow">WHAT WE OFFER</div>
            <h2>
              Tailored immigration services.
              <em> Designed for your success.</em>
            </h2>
            <p>
              Comprehensive documentation and petition preparation tailored to meet the strict standards of U.S. immigration authorities.
            </p>
          </div>

          {/* PricingData سے کیٹگریز اور آئٹمز کو لوپ کرنا */}
          {pricingData.map((category) => (
            <div key={category.tab} className="categoryGroup" style={{ marginTop: "50px" }}>
              {/* کیٹگری کا ٹائٹل اور ٹیگ لائن */}
              <div className="center categoryIntro" style={{ marginBottom: "30px" }}>
                <span className="eyebrow" style={{ fontSize: "0.8rem", color: "var(--primary)" }}>{category.tab}</span>
                <h3 style={{ fontSize: "1.75rem", marginTop: "5px" }}>{category.tagline}</h3>
                {category.desc && <p style={{ maxWidth: "700px", margin: "10px auto 0" }}>{category.desc}</p>}
                {category.categories && (
                  <p className="supported" style={{ marginTop: "10px", fontSize: "0.9rem" }}>
                    <b>Categories supported:</b> {category.categories}
                  </p>
                )}
              </div>

              {/* اس کیٹگری کے تمام آئٹمز کا گرڈ */}
              <div className="servicesGrid">
                {category.items.map((item) => {
                  const serviceSlug = slugify(item.name);
                  const isQuote = !item.price;

                  return (
                    <article className="serviceCard" key={item.name}>
                      <div className="cardHeader" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span className="audienceTag" style={{ fontWeight: 600, fontSize: "0.85rem" }}>
                          {category.tab}
                        </span>
                        <div className="bigPrice" style={{ fontWeight: "bold" }}>
                          {item.price ?? "Custom Quote"}
                          {item.price && <small style={{ fontWeight: "normal", fontSize: "0.75rem" }}> standard</small>}
                        </div>
                      </div>

                      <h3 style={{ margin: "15px 0 10px" }}>{item.name}</h3>

                      {category.time && (
                        <div className="time" style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px", fontSize: "0.85rem", opacity: 0.8 }}>
                          <Clock3 size={15} />
                          <span>{category.time}</span>
                        </div>
                      )}

                      <p className="description" style={{ marginBottom: "20px" }}>
                        {item.desc ?? category.desc}
                      </p>

                      {/* Features List */}
                      {category.features.length > 0 && (
                        <div className="features" style={{ marginBottom: "20px" }}>
                          <strong style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem" }}>Key Highlights:</strong>
                          {category.features.map((feature) => (
                            <span key={feature} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", marginBottom: "6px" }}>
                              <Check size={15} color="green" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Footer Action Button */}
                      <div className="cardFooter" style={{ marginTop: "auto" }}>
                        <Link
                          href={`/services/${serviceSlug}`}
                          className="btn"
                          style={{
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            width: "100%"
                          }}
                        >
                          {isQuote ? "Request a Quote" : "Get Started"}
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Bottom Callout */}
          <div className="servicesCallout center" style={{ marginTop: "80px" }}>
            <h3>Need a Customized Documentation Strategy?</h3>
            <p>
              We understand every case is unique. Contact us today to discuss your specific profile and requirements.
            </p>
            <button onClick={() => go("contact")} className="ctaButton" style={{ marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Schedule a Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}