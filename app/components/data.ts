import {
  Award,
  Briefcase,
  FileCheck2,
  GraduationCap,
  MessageSquareText,
  ShieldCheck,
  UsersRound
} from "lucide-react";
import { pricingData } from "./pricedata";

/* ---------- Services (guide ke mutabiq 7 services) ---------- */
export const services = [
  {
    icon: FileCheck2,
    title: "Expert Opinion Letters",
    copy: "Tailored evaluations written by qualified university professors or industry experts to establish specialized knowledge, position complexity, or extraordinary ability.",
    chips: ["H-1B", "E-3", "EB-1A/B/C", "EB-2 NIW", "O-1A/B", "L-1A/B"]
  },
  {
    icon: MessageSquareText,
    title: "RFE / NOID Response",
    copy: "Structured drafting assistance for responding to Requests for Evidence (RFE) and Notices of Intent to Deny (NOID) issued by USCIS.",
    chips: ["EB-1A/B/C", "EB-2 NIW", "O-1A/B", "L-1A/B"]
  },
  {
    icon: UsersRound,
    title: "Recommendation Letters",
    copy: "Customized, persuasive reference letters drafted to highlight specific criteria required for high-skilled and extraordinary ability visa categories.",
    chips: ["EB-1A/B", "EB-2 NIW", "O-1A/B"]
  },
  {
    icon: Award,
    title: "Position Evaluation",
    copy: "Comprehensive analysis of job descriptions to verify specialty occupation status or executive/managerial level functions.",
    chips: ["Custom quote"]
  },
  {
    icon: GraduationCap,
    title: "Credential Evaluation",
    copy: "Formal academic and work experience evaluations to establish U.S. degree equivalency.",
    chips: ["Custom quote"]
  },
  {
    icon: Briefcase,
    title: "Professional / Business Plans",
    copy: "Detailed business plans and national interest narratives structured for EB-2 NIW, L-1, and E-2 petitions.",
    chips: ["EB-2 NIW", "L-1", "E-2"]
  },
  {
    icon: ShieldCheck,
    title: "Petition Verification & Quality Review",
    copy: "Thorough audit and review of existing petition packets to ensure consistency, strong evidence alignment, and technical accuracy prior to submission.",
    chips: ["Custom quote"]
  }
];

/* ---------- FAQ (sirf wahi jawab badle jo guide se takrate the) ---------- */
export const faq = [
  [
    "What is an Expert Opinion Letter?",
    "An Expert Opinion Letter is a tailored evaluation written by a qualified university professor or industry expert to establish specialized knowledge, position complexity, or extraordinary ability."
  ],
  [
    "What is the difference between an Expert Opinion Letter and a Recommendation Letter?",
    "An expert opinion generally provides independent professional analysis. A recommendation letter is a reference letter drafted to highlight specific criteria for high-skilled and extraordinary ability categories, based on the expert's background, key contributions and critical roles."
  ],
  [
    "Which immigration categories do you support?",
    "We support H-1B, E-3, EB-1A, EB-1B, EB-1C, EB-2 NIW, O-1A, O-1B, L-1A and L-1B, depending on the service. Business plans also cover E-2 petitions."
  ],
  [
    "Can you help with an RFE or NOID?",
    "Yes. We analyze the challenge points raised by USCIS, bring together supporting evidence, and draft technical expert arguments for your response."
  ],
  [
    "Do you guarantee USCIS approval?",
    "No. Immigration outcomes cannot be guaranteed. We provide professional documentation based on the information and evidence supplied and the agreed scope of work."
  ],
  [
    "Do you provide legal advice?",
    "Immigra Evaluations provides professional documentation and evaluation services, not legal representation. For legal advice or petition strategy, clients should consult a qualified U.S. immigration attorney."
  ],
  [
    "Can you work with my immigration attorney?",
    "Yes. Attorneys can communicate case-specific requirements and evidentiary priorities, and we can prepare professional documentation for counsel's review and use."
  ],
  [
    "How quickly can I receive my document?",
    "Expert Opinion Letters take 2 to 5 business days, RFE / NOID responses 3 to 5 business days, and Recommendation Letters 2 to 3 business days."
  ],
  [
    "How is pricing set for evaluations and plans?",
    "Position Evaluations, Credential Evaluations, Business Plans and Petition Verification are quoted individually based on scope, complexity and case needs. Fill in the contact form for a personalized quote."
  ]
];

/* ---------- Pricing (ab pricedata.ts se hi banta hai, taake ek hi source rahe) ---------- */
export const pricing = pricingData.map((c) => ({
  name: c.tab,
  time: c.time,
  desc: c.desc,
  features: c.features,
  items: c.items.map((i) => [i.name, i.price ?? "Custom quote"] as [string, string])
}));

export const pricingTabs = pricingData.map((c) => c.tab);

/* ---------- Categories ---------- */
export const categories = [
  ["H-1B", "Specialty Occupation"],
  ["E-3", "Specialty Occupation"],
  ["EB-1A", "Extraordinary Ability"],
  ["EB-1B", "Outstanding Researchers & Professors"],
  ["EB-1C", "Multinational Executives & Managers"],
  ["EB-2 NIW", "National Interest Waiver"],
  ["O-1A / O-1B", "Extraordinary Ability"],
  ["L-1A", "Intracompany Executive / Manager"],
  ["L-1B", "Specialized Knowledge"]
];

/* ---------- "Starting from" prices ---------- */
export const microPrices = [
  ["Expert Opinion Letters", "From $499"],
  ["RFE / NOID Response", "From $799"],
  ["Recommendation Letters", "$599"],
  ["Evaluations, Plans & Reviews", "Custom quote"]
];

/* ---------- Pehle wali file se jyon ke tyon wapas (guide ka hissa nahi) ---------- */
export const benefits = [
  ["Specialized focus", "We focus on professional immigration documentation—not general travel or visa processing."],
  ["300+ experts*", "Our panel spans diverse academic, technical and professional disciplines."],
  ["Attorney collaboration", "Counsel can communicate case-specific requirements and evidentiary priorities."],
  ["Transparent options", "Packages make the scope, revisions and turnaround expectations clear."],
  ["Quality review", "Every deliverable is reviewed for clarity, consistency and completeness within the agreed scope."],
  ["Confidential process", "Professional records, credentials and case materials are handled with discretion."]
];

export const processSteps = [
  ["01", "Tell us about your case", "Complete a short intake and identify the documentation you need."],
  ["02", "Submit your materials", "Share your CV, credentials, employment information and relevant case materials."],
  ["03", "Review & scope", "We confirm the appropriate service, requirements and timeline."],
  ["04", "Expert matching", "Where applicable, an appropriate professional is selected from our panel."],
  ["05", "Development & review", "Your document is developed and reviewed against the agreed scope."],
  ["06", "Secure delivery", "Receive your completed documentation electronically for your records or counsel."]
];