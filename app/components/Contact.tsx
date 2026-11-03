"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      category: fd.get("category"),
      service: fd.get("service"),
      message: fd.get("message"),
      acceptedTerms: fd.get("acceptedTerms") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to submit.");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap contactGrid">
        <div>
          <div className="eyebrow light">START YOUR CASE</div>
          <h2>
            Let's identify the <em>right documentation</em> for your case.
          </h2>
          <p>
            Tell us what you need. Our team will review your request and guide
            you to the appropriate service and package.
          </p>

          <div className="contactInfo">
            <div>
              <span>EMAIL</span>
              <b>info@immigraevaluations.com</b>
            </div>
            <div>
              <span>FOR ATTORNEYS</span>
              <b>Priority case coordination available</b>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            <label>
              Full Name
              <input name="name" required placeholder="Your full name" />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="formRow">
            <label>
              Immigration Category
              <select name="category" defaultValue="">
                <option value="" disabled>
                  Select category
                </option>
                <option>H-1B</option>
                <option>EB-1A</option>
                <option>EB-1B</option>
                <option>EB-2 NIW</option>
                <option>O-1</option>
                <option>L-1</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Service Needed
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select service
                </option>
                <option>Expert Opinion Letter</option>
                <option>Recommendation Letter</option>
                <option>Credential Evaluation</option>
                <option>Position Evaluation</option>
                <option>RFE / NOID Support</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>

          <label>
            Tell Us About Your Request
            <textarea
              name="message"
              required
              placeholder="Briefly describe your case and the documentation you are looking for..."
            />
          </label>

          <label className="checkBox">
            <input type="checkbox" name="acceptedTerms" required />
            <span>
              I understand that Immigra Evaluations provides professional
              documentation services and not legal representation.
            </span>
          </label>

          <button
            className="btn primary full"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Request a Case Review"}
            <ArrowRight />
          </button>

          {status === "success" && (
            <p>
              Thank you! We've received your request and will be in touch soon.
            </p>
          )}
          {status === "error" && <p>{errorMsg}</p>}
        </form>
      </div>
    </section>
  );
}