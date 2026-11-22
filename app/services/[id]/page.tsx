"use client";

import { useParams } from "next/navigation";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import Link from "next/link";
import { pricingData, slugify } from "@/app/components/pricedata";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PayButton from "@/app/components/paystack/PayButton";

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = decodeURIComponent(String(params?.id || ""));

  let foundItem: any = null;
  let foundCategory: any = null;

  // pricedata میں سے میچ کریں
  pricingData.forEach((cat) => {
    cat.items.forEach((item) => {
      if (slugify(item.name) === serviceId) {
        foundItem = item;
        foundCategory = cat;
      }
    });
  });

  if (!foundItem) {
    return (
      <>
        <Header />
        <div className="wrap center" style={{ padding: "100px 0" }}>
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist or the link is invalid.</p>
          <Link
            href="/services"
            className="btn"
            style={{ marginTop: "20px", display: "inline-block", textDecoration: "none" }}
          >
            Back to Services
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="section serviceDetailSection" style={{ padding: "80px 0" }}>
        <div className="wrap" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="serviceDetailContent">
            <div
              className="eyebrow"
              style={{ color: "var(--primary)", fontWeight: "600", marginBottom: "10px" }}
            >
              {foundCategory?.tab || "SERVICE DETAILS"}
            </div>

            <h1
              className="text-2xl"
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              {foundItem.name}
            </h1>

            <div
              className="bigPrice"
              style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "20px 0" }}
            >
              {foundItem.price ?? "Custom Quote"}
              {foundItem.price && (
                <small style={{ fontSize: "1rem", fontWeight: "normal", opacity: 0.7 }}>
                  {" "}
                  standard
                </small>
              )}
            </div>

            {foundCategory?.time && (
              <div
                className="time"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "20px",
                  opacity: 0.85,
                }}
              >
                <Clock3 size={18} />
                <span>Turnaround: {foundCategory.time}</span>
              </div>
            )}

            <p
              className="lead"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                marginBottom: "30px",
                opacity: 0.9,
              }}
            >
              {foundItem.desc ?? foundCategory?.desc}
            </p>

            {foundCategory?.features && foundCategory.features.length > 0 && (
              <div
                className="featuresList"
                style={{
                  margin: "30px 0",
                  background: "rgba(0,0,0,0.02)",
                  padding: "25px",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ marginBottom: "15px", fontSize: "1.2rem" }}>
                  What&apos;s Included:
                </h3>
                <div
                  className="features"
                  style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  {foundCategory.features.map((feature: string) => (
                    <span
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "1rem",
                      }}
                    >
                      <Check size={18} color="green" /> {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div
  className="buttons"
  style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "40px" }}
>
  <PayButton serviceId={serviceId} price={foundItem.price} />
  <Link
    href="/services"
    style={{ textDecoration: "none", opacity: 0.75, fontSize: "0.95rem" }}
  >
    ← View All Services
  </Link>
</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}