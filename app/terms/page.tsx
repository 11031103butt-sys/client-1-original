"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO SECTION */}
        <section className="bg-[var(--navy)] text-white py-20 px-6 border-b border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--blue)] mb-3">
              LEGAL &amp; COMPLIANCE
            </span>
            <h1
              className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white"
              style={{ color: "#ffffff" }}
            >
              Terms of Service
            </h1>
            <p className="text-slate-300 text-sm md:text-base">
              Last updated: November 2026
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-16 px-6 max-w-4xl mx-auto space-y-10 text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website, submitting case materials, or engaging <strong>Immigra Evaluations</strong> for professional documentation, expert opinion letters, or credential evaluations, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Nature of Services &amp; No Legal Representation
            </h2>
            <p className="mb-3">
              Immigra Evaluations provides specialized professional documentation, expert assessments, and evidentiary evaluations designed to support U.S. employment-based immigration petitions. Please note:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Non-Legal Status:</strong> We are a documentation and evaluation provider, not a law firm. We do not provide legal representation, legal advice, or petition filing services unless explicitly stated under independent agreements with a licensed attorney.
              </li>
              <li>
                <strong>Attorney Collaboration:</strong> Our work is intended to complement the strategy of qualified U.S. immigration counsel. Clients and attorneys remain solely responsible for the legal strategy and final submission of petitions to USCIS.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. No Guarantee of Immigration Outcomes
            </h2>
            <p>
              Immigra Evaluations prepares professional evaluations based strictly on the information, evidence, and credentials supplied by the petitioner or their counsel. We <strong>do not guarantee</strong> approval by U.S. Citizenship and Immigration Services (USCIS) or any other government agency, as immigration adjudications depend on numerous factors outside our control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Client Responsibilities &amp; Accuracy
            </h2>
            <p>
              Clients and legal counsel are responsible for ensuring the absolute accuracy, authenticity, and completeness of all provided documents (such as CVs, degrees, publications, and awards). Immigra Evaluations is not liable for delays, Requests for Evidence (RFEs), or denials resulting from inaccurate, misleading, or incomplete source materials provided by the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Intellectual Property &amp; Deliverables
            </h2>
            <p>
              All expert opinion letters, evaluations, summaries, and templates produced by our network are licensed for use exclusively in connection with the specific immigration petition or legal matter for which they were ordered. Redistribution, resale, or unauthorized repurposing of our deliverables is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Modifications to Terms
            </h2>
            <p className="mb-6">
              We reserve the right to modify or update these Terms of Service at any time. Continued use of our website or services following any changes constitutes your acceptance of the revised terms.
            </p>
            <button
              onClick={() => router.push("/#contact")}
              className="btn primary"
            >
              Contact Us with Questions
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}