"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const coreValues = [
  {
    title: "Accuracy",
    desc: "Every credential evaluation, expert opinion letter, and evidentiary summary is meticulously audited against academic standards, industry definitions, and rigorous USCIS criteria to eliminate ambiguity."
  },
  {
    title: "Integrity",
    desc: "We maintain absolute intellectual honesty and objective independence. Our network of vetted experts provides authentic, defensible assessments that uphold the highest standards of professional ethics."
  },
  {
    title: "Confidentiality",
    desc: "We treat sensitive career records, proprietary business metrics, unpublished research, and personal data with strict discretion, adhering to robust data protection protocols."
  },
  {
    title: "Responsiveness",
    desc: "Immigration timelines demand urgency and precision. Our dedicated case coordinators ensure seamless communication, predictable turnaround times, and rapid support at every stage."
  }
];

const milestones = [
  {
    year: "Our Mission",
    title: "Purpose-Built for Immigration",
    desc: "To bridge the gap between complex professional achievements and legal evidentiary standards by providing clear, authoritative documentation designed exclusively for high-stakes U.S. immigration petitions."
  },
  {
    year: "Our Network",
    title: "300+ Vetted Industry Experts",
    desc: "Spanning university professors, department chairs, senior engineers, medical researchers, and executives across STEM, business, arts, and healthcare to ensure true peer-level evaluation."
  },
  {
    year: "Our Approach",
    title: "Seamless Attorney Collaboration",
    desc: "We work hand-in-hand with immigration counsel, aligning every piece of documentation with the overarching legal brief, RFE responses, and petition strategy."
  }
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-900">
        {/* 1. HERO SECTION */}
        <section className="bg-[var(--navy)] text-white py-24 px-6 border-b border-slate-800">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--blue)] mb-4">
              ABOUT IMMIGRA EVALUATIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Professional expertise, purpose-built for immigration.
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-10">
              Immigra Evaluations provides specialized professional documentation for U.S. employment-based immigration matters. We help turn academic credentials, professional achievements, occupational expertise and career impact into clear, credible documentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => router.push("/services")}
                className="btn primary"
              >
                Explore Our Services
              </button>
              <button
                onClick={() => router.push("/#contact")}
                className="btn secondary"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>

        {/* 2. WHO WE ARE / OVERVIEW */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--navy)]">
                Who We Are
              </span>
              <h2 className="text-3xl font-bold mt-2 text-slate-900 leading-snug">
                Turning Complex Career Achievements into Defensible Evidence
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                Our work is designed to complement the work of immigration counsel and give petitioners access to professional documentation organized around the purpose of their case.
              </p>
              <p>
                Whether navigating EB-1A extraordinary ability petitions, EB-2 NIW national interest waivers, or O-1 nonimmigrant visas, adjudicators require deep contextual insight into an applicant’s real-world impact. We supply the authoritative evaluations and expert opinions needed to satisfy these stringent USCIS standards.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CORE VALUES SECTION */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--navy)]">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
                Core Values That Drive Every Case
              </h2>
              <p className="text-slate-600 mt-3">
                The pillars of trust, quality, and commitment behind every evaluation we deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((val, idx) => (
                <div
                  key={val.title}
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[var(--blue)] hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="text-sm font-mono font-bold text-[var(--blue)] mb-3">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {val.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. STRATEGIC FOCUS & MISSION */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--navy)]">
              How We Operate
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
              Built for Attorneys, Tailored for Petitioners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-slate-100 text-[var(--navy)] text-xs font-bold rounded-md uppercase tracking-wider mb-4">
                    {m.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {m.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CALL TO ACTION SECTION */}
        <section className="py-20 px-6 bg-[var(--navy)] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#ffffff' }}>
              Ready to Strengthen Your Legal Petition?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Partner with Immigra Evaluations for rigorous, defensible, and field-specific documentation that supports your immigration strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => router.push("/services")}
                className="btn primary"
              >
                View Services &amp; Packages
              </button>
              <button
                onClick={() => router.push("/#contact")}
                className="btn secondary"
              >
                Request a Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}