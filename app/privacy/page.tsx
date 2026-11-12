"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              1. Introduction
            </h2>
            <p>
              At <strong>Immigra Evaluations</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting the confidential career records, academic documents, and personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or utilize our evaluation and documentation services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              To provide accurate expert opinions, credential evaluations, and RFE support, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Identification Information:</strong> Name, email address, phone number, and mailing address.
              </li>
              <li>
                <strong>Professional &amp; Academic Records:</strong> Resumes, CVs, degree certificates, transcripts, employment history, publications, patents, and award records.
              </li>
              <li>
                <strong>Immigration &amp; Legal Details:</strong> Visa petition categories (e.g., EB-1A, EB-2 NIW, H-1B), RFE/NOID notices, and attorney correspondence shared voluntarily for case scoping.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, device information, and usage data collected automatically via cookies and analytics tools.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the collected information strictly for legitimate business and operational purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Matching your case with qualified subject-matter experts and evaluators.</li>
              <li>Drafting, reviewing, and delivering customized expert opinion letters and evaluations.</li>
              <li>Communicating with you or your immigration counsel regarding case progress and revisions.</li>
              <li>Processing payments and managing administrative records.</li>
              <li>Complying with legal obligations and maintaining internal quality assurance protocols.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Data Confidentiality &amp; Security
            </h2>
            <p>
              We treat sensitive career records, proprietary business metrics, and unpublished research with strict discretion. All materials are accessed solely by assigned case coordinators, editors, and vetted evaluators. We implement robust technical, administrative, and physical security measures to protect your data against unauthorized access, disclosure, alteration, or destruction. Client records are never sold, rented, or repurposed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Sharing of Information
            </h2>
            <p>
              We do not share your personal or professional data with third parties except:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>With your explicit consent or at the direction of your legal counsel.</li>
              <li>With trusted service providers (e.g., secure payment gateways, cloud hosting providers) bound by strict confidentiality agreements.</li>
              <li>When required by law, subpoena, or legal process to protect our legal rights or comply with judicial proceedings.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your data, please feel free to reach out to our team.
            </p>
            <button
              onClick={() => router.push("/#contact")}
              className="btn primary"
            >
              Contact Our Team
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}