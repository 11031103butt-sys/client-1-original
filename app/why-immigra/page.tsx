"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const corePillars = [
  {
    num: "01",
    title: "Specialized Focus",
    subtitle: "Dedicated purely to evidentiary immigration documentation",
    desc: "We do not handle general tourist visas, travel bookings, or broad administrative filings. Our entire infrastructure is built around high-stakes employment-based and merit-based U.S. immigration petitions (such as EB-1A, EB-2 NIW, O-1A, H-1B, and L-1), ensuring deep alignment with USCIS evidentiary standards."
  },
  {
    num: "02",
    title: "300+ Vetted Experts*",
    subtitle: "Broad academic, technical, and industry coverage",
    desc: "A credible opinion requires an evaluator who genuinely understands the beneficiary's field. Our network spans university professors, department chairs, senior engineers, medical researchers, and industry executives across STEM, business, arts, and healthcare."
  },
  {
    num: "03",
    title: "Attorney Collaboration",
    subtitle: "Built to support legal strategy, never replace it",
    desc: "We work seamlessly alongside immigration counsel. Attorneys can submit legal briefs, RFE notices, and specific evidentiary priorities directly to us so that every expert letter or evaluation reinforces the overarching legal argument."
  },
  {
    num: "04",
    title: "Transparent Options",
    subtitle: "Predictable pricing, clear scope, and reliable timelines",
    desc: "Immigration deadlines are unforgiving. Our structured service tiers clearly define turnaround times, included revision rounds, and exact deliverables upfront—eliminating hidden fees or last-minute surprises."
  },
  {
    num: "05",
    title: "Multi-Tier Quality Review",
    subtitle: "Rigorous editorial and factual verification",
    desc: "Before any document reaches your inbox, our internal editorial team reviews it for structural clarity, factual alignment with the beneficiary's CV, proper citation of supporting exhibits, and adherence to the agreed scope."
  },
  {
    num: "06",
    title: "Confidential Process",
    subtitle: "Strict discretion for sensitive career records",
    desc: "Patents, unpublished research, proprietary business metrics, and personal academic transcripts are handled under strict confidentiality protocols. Client records are never shared or repurposed."
  }
];

const comparisonRows = [
  {
    feature: "Drafting Approach",
    generic: "Copy-paste templates with swapped names and job titles",
    immigra: "Custom-written from scratch based on a deep review of your CV, exhibits, and field"
  },
  {
    feature: "Evaluator Matching",
    generic: "Generalist writers with no real-world standing in your industry",
    immigra: "Matched with credentialed professors or senior practitioners in your exact discipline"
  },
  {
    feature: "USCIS & RFE Alignment",
    generic: "Vague praise that triggers Requests for Evidence (RFEs)",
    immigra: "Structured around specific regulatory criteria and objective industry impact"
  },
  {
    feature: "Legal Integration",
    generic: "Disconnected from the immigration attorney's petition strategy",
    immigra: "Direct coordination with counsel to address specific evidentiary gaps"
  },
  {
    feature: "Revisions & Support",
    generic: "Rigid delivery with costly or slow post-delivery edits",
    immigra: "Clear revision policies and responsive case coordination until filing"
  }
];

const processSteps = [
  {
    step: "Step 1",
    title: "Case Intake & Document Audit",
    detail:
      "You or your attorney share the beneficiary’s resume, degree transcripts, publications, or RFE notice. We review the materials to confirm scope and select the right service tier."
  },
  {
    step: "Step 2",
    title: "Subject-Matter Expert Matching",
    detail:
      "We pair the case with an independent expert whose academic credentials and professional background directly align with the petitioner’s specialized domain."
  },
  {
    step: "Step 3",
    title: "Substantive Analysis & Drafting",
    detail:
      "Rather than summarizing a resume, the expert contextualizes why the beneficiary's work matters—explaining technical complexity, national importance, or academic equivalency."
  },
  {
    step: "Step 4",
    title: "Editorial Review & Final Delivery",
    detail:
      "Our quality assurance team audits the draft for consistency, formatting, and exhibit alignment before delivering the signed, ready-to-file documentation."
  }
];

export default function WhyImmigraPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-900">
        {/* 1. HERO SECTION */}
        <section className="bg-[var(--navy)] text-white py-24 px-6 border-b border-slate-800">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--blue)] mb-4">
              WHY IMMIGRA
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Because important cases deserve more than a template.
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-10">
              We built Immigra around a simple principle:{" "}
              <span className="text-white font-semibold">
                professional evidence should be understood before it is written.
              </span>
            </p>
            <div className="flex flex-wrap gap-4">
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
                Discuss Your Case
              </button>
            </div>
          </div>
        </section>

        {/* 2. PHILOSOPHY / MEET IMMIGRA */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--navy)]">
                Meet Immigra
              </span>
              <h2 className="text-3xl font-bold mt-2 text-slate-900">
                Bridging Complex Expertise &amp; Immigration Standards
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                Adjudicators reviewing high-skilled immigration petitions are rarely
                specialists in quantum computing, structural biology, enterprise
                software architecture, or niche clinical research. When complex
                achievements are presented using generic, boilerplate language,
                their true significance gets lost.
              </p>
              <p>
                At <strong>Immigra Evaluations</strong>, we bridge that gap. We
                translate intricate technical, academic, and executive accomplishments
                into clear, authoritative, and objectively substantiated expert
                evaluations—giving petitioners and immigration attorneys the
                evidentiary clarity strong filings demand.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SIX CORE PILLARS (01 - 06) */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--navy)]">
                Our Standards
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
                Six Pillars of Every Immigra Evaluation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corePillars.map((item) => (
                <div
                  key={item.num}
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[var(--blue)] hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="text-sm font-mono font-bold text-[var(--blue)] mb-3">
                      {item.num}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COMPARISON TABLE: GENERIC TEMPLATES VS IMMIGRA */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--navy)]">
              The Difference
            </span>
            <h2 className="text-3xl font-bold mt-2 text-slate-900">
              Generic Templates vs. Immigra’s Approach
            </h2>
            <p className="text-slate-600 mt-3">
              Why substantive, field-specific analysis outperforms mass-produced
              letters.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--navy)] text-white text-sm">
                  <th className="p-4 font-semibold w-1/4">Criteria</th>
                  <th className="p-4 font-semibold w-3/8 text-slate-300">
                    Typical Template Services
                  </th>
                  <th className="p-4 font-semibold w-3/8 text-[var(--blue)]">
                    Immigra Evaluations
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-4 text-slate-500">{row.generic}</td>
                    <td className="p-4 text-slate-800 font-medium">
                      {row.immigra}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. HOW WE WORK (PROCESS) */}
        <section className="py-20 px-6 bg-[var(--navy)] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--blue)]">
                Our Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white" style={{ color: '#ffffff' }}>
                How We Build Defensible Evidence
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((s) => (
                <div
                  key={s.step}
                  className="p-7 rounded-xl bg-slate-800/70 border border-slate-700"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
                    {s.step}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-white" style={{ color: '#ffffff' }}>{s.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHO WE SERVE & FINAL CTA */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-14 shadow-sm text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Strengthen Your Petition?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-8">
              Whether you are an immigration attorney building a multi-exhibit
              filing or an individual petitioner responding to an RFE, our team is
              ready to assist.
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
                Request an Evaluation
              </button>
            </div>
          </div>

          {/* COMPLIANCE DISCLAIMER */}
          <p className="text-xs text-slate-500 mt-12 leading-relaxed">
            *Business-specific statistics and claims should only be published after
            they have been verified and can be substantiated. References to USCIS
            compliance must not imply USCIS endorsement, certification or approval.
            AACRAO EDGE references should only be used for applicable credential
            evaluation services actually performed using the relevant methodology.
            Immigra Evaluations does not guarantee an immigration outcome and does
            not provide legal representation unless separately stated by a properly
            licensed attorney.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}