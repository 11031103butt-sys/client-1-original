"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ChevronDown,
  ArrowRight,
  HelpCircle,
  Clock,
  ShieldCheck,
  Scale,
  FileText
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { faq as baseFaq } from "../components/data";

// Base FAQs ko categories aur extra details ke sath organize kiya gaya hai
const categorizedFaqs = [
  {
    category: "Services & Documents",
    question: baseFaq[0][0], // What is an Expert Opinion Letter?
    answer: baseFaq[0][1]
  },
  {
    category: "Services & Documents",
    question: baseFaq[1][0], // Difference between Expert Opinion & Recommendation Letter
    answer: baseFaq[1][1]
  },
  {
    category: "Eligibility & Visas",
    question: baseFaq[2][0], // Which immigration categories do you support?
    answer: baseFaq[2][1]
  },
  {
    category: "Services & Documents",
    question: baseFaq[3][0], // Can you help with an RFE or NOID?
    answer: baseFaq[3][1]
  },
  {
    category: "Legal & Compliance",
    question: baseFaq[4][0], // Do you guarantee USCIS approval?
    answer: baseFaq[4][1]
  },
  {
    category: "Legal & Compliance",
    question: baseFaq[5][0], // Do you provide legal advice?
    answer: baseFaq[5][1]
  },
  {
    category: "Process & Turnaround",
    question: baseFaq[6][0], // Can you work with my immigration attorney?
    answer: baseFaq[6][1]
  },
  {
    category: "Process & Turnaround",
    question: baseFaq[7][0], // How quickly can I receive my document?
    answer: baseFaq[7][1]
  },
  {
    category: "Pricing & Quotes",
    question: baseFaq[8][0], // How is pricing set for evaluations and plans?
    answer: baseFaq[8][1]
  },
  {
    category: "Process & Turnaround",
    question: "What documents do I need to get started?",
    answer:
      "Typically, we need an updated CV or resume, copies of academic degrees and transcripts, job descriptions (for H-1B/L-1/Position Evaluations), and any relevant supporting exhibits such as publications, patents, awards, or USCIS RFE/NOID notices."
  },
  {
    category: "Process & Turnaround",
    question: "Are revisions included if my attorney requests changes?",
    answer:
      "Yes. Each service tier includes structured revision rounds so your immigration counsel can ensure the evaluation or letter aligns seamlessly with the overarching legal brief."
  },
  {
    category: "Legal & Compliance",
    question: "How is my personal and proprietary information protected?",
    answer:
      "All resumes, unpublished research, patent filings, and corporate records are handled under strict confidentiality protocols. Materials are accessed only by assigned case coordinators and vetted evaluators and are never shared or repurposed."
  }
];

const categories = [
  "All",
  "Services & Documents",
  "Eligibility & Visas",
  "Process & Turnaround",
  "Pricing & Quotes",
  "Legal & Compliance"
];

export default function FAQPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    return categorizedFaqs.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-900">
        {/* 1. HERO SECTION */}
        <section className="bg-[var(--navy)] text-white py-24 px-6 border-b border-slate-800">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--blue)] mb-4">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white"
              style={{ color: "#ffffff" }}
            >
              Clear answers before you begin.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Everything petitioners, HR teams, and immigration attorneys need to
              know about our evaluation process, timelines, and USCIS evidentiary
              standards.
            </p>

            {/* SEARCH BAR */}
            <div className="max-w-xl mx-auto relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenIndex(null);
                }}
                placeholder="Search questions (e.g., RFE, turnaround, EB-2 NIW, attorney)..."
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--blue)] shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 2. QUICK HIGHLIGHTS STRIP */}
        <section className="bg-slate-50 border-b border-slate-200 py-8 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[var(--blue)] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">2–5 Business Days</div>
                <div className="text-slate-500 text-xs">Standard turnaround</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Scale className="w-5 h-5 text-[var(--blue)] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Attorney-Ready</div>
                <div className="text-slate-500 text-xs">Aligned with legal strategy</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[var(--blue)] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Custom Drafted</div>
                <div className="text-slate-500 text-xs">Zero generic templates</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--blue)] shrink-0" />
              <div>
                <div className="font-bold text-slate-900">100% Confidential</div>
                <div className="text-slate-500 text-xs">Strict record discretion</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CATEGORY TABS & ACCORDION LIST */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          {/* CATEGORY FILTER PILLS */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition border ${
                    active
                      ? "bg-[var(--navy)] text-white border-[var(--navy)]"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[var(--blue)] hover:text-[var(--navy)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* FAQ ITEMS */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={item.question}
                    className={`rounded-xl border transition ${
                      isOpen
                        ? "border-[var(--blue)] bg-slate-50/70 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    >
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--blue)] mb-1">
                          {item.category}
                        </span>
                        <span className="text-base md:text-lg font-bold text-slate-900">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[var(--blue)]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-200/70">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 px-6 rounded-2xl border border-dashed border-slate-300">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                No matching questions found
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Try adjusting your search keywords or reach out to our team
                directly.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="btn secondary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* 4. STILL HAVE QUESTIONS CTA */}
        <section className="py-20 px-6 bg-[var(--navy)] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--blue)] mb-3">
              DIRECT SUPPORT
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              style={{ color: "#ffffff" }}
            >
              Have a Case-Specific Question?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Every immigration petition has unique evidentiary requirements.
              Share your case details or RFE notice with us for a tailored
              recommendation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => router.push("/#contact")}
                className="btn primary"
              >
                Ask Us Directly
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => router.push("/services")}
                className="btn secondary"
              >
                Explore Services &amp; Pricing
              </button>
            </div>
          </div>
        </section>

        {/* 5. COMPLIANCE DISCLAIMER */}
        <section className="py-10 px-6 max-w-5xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            *Immigra Evaluations provides specialized professional documentation
            and evaluation services, not legal representation. Immigration
            outcomes cannot be guaranteed. For legal advice or petition strategy,
            clients should consult a qualified U.S. immigration attorney.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}