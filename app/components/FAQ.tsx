"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faq } from "./data";
import { scrollToSection as go } from "./scroll";

export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section faqSection">
      <div className="wrap faqGrid">
        <div>
          <div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div>
          <h2>
            Questions before you <em>begin?</em>
          </h2>
          <p>Clear answers to questions clients and attorneys ask most often.</p>
          <button className="btn primary" onClick={() => go("contact")}>
            Ask Us Directly
            <ArrowRight />
          </button>
        </div>

        <div className="faqList">
          {faq.map(([question, answer], index) => (
            <div className="faqItem" key={question}>
              <button
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
              >
                <span>{question}</span>
                <ChevronDown className={faqOpen === index ? "rotated" : ""} />
              </button>
              {faqOpen === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
