import {
  Award,
  FileCheck2,
  GraduationCap,
  MessageSquareText,
  UsersRound
} from "lucide-react";

export const services = [
  {
    icon: FileCheck2,
    title: "Expert Opinion Letters",
    copy: "Independent, field-specific professional analysis tailored to the evidentiary needs of your U.S. immigration matter.",
    chips: ["H-1B", "EB-1", "EB-2 NIW", "O-1"]
  },
  {
    icon: UsersRound,
    title: "Recommendation Letters",
    copy: "Professionally developed letters that communicate your achievements, contributions, expertise and impact with clarity.",
    chips: ["EB-1A", "EB-2 NIW", "O-1"]
  },
  {
    icon: GraduationCap,
    title: "Credential Evaluations",
    copy: "Clear evaluation of international education and credentials for U.S. immigration and professional purposes.",
    chips: ["Course-by-Course", "Document-by-Document"]
  },
  {
    icon: Award,
    title: "Position Evaluations",
    copy: "Detailed analysis of job duties, requirements, education and experience for specialty-occupation and related matters.",
    chips: ["H-1B", "L-1", "RFE Support"]
  },
  {
    icon: MessageSquareText,
    title: "RFE & NOID Support",
    copy: "Focused documentation support built around the specific evidentiary issue identified in your USCIS notice.",
    chips: ["RFE", "NOID", "Case Review"]
  }
];

export const faq = [
  [
    "What is an Expert Opinion Letter?",
    "An Expert Opinion Letter is a professional assessment prepared by a qualified expert to address a defined issue relevant to an immigration matter. The scope and evidence considered depend on the engagement."
  ],
  [
    "What is the difference between an Expert Opinion Letter and a Recommendation Letter?",
    "An expert opinion generally provides independent professional analysis. A recommendation letter is an endorsement from someone who knows the beneficiary or their work and can discuss achievements, contributions or qualifications."
  ],
  [
    "Which immigration categories do you support?",
    "Our documentation services support employment-based matters including H-1B, EB-1A, EB-1B, EB-2 NIW, O-1 and L-1, subject to the facts and requirements of the particular engagement."
  ],
  [
    "Can you help with an RFE or NOID?",
    "Yes. We can review the notice and supplied materials to identify documentation needs and determine whether an expert opinion, evaluation or related professional document is appropriate."
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
    "Turnaround varies by service, complexity, expert availability and selected package. Your confirmed scope and delivery timeframe will be provided before work begins."
  ]
];

export const pricing = [
  {
    name: "Essential",
    price: "$495",
    time: "Standard turnaround",
    desc: "For a clearly defined documentation need.",
    popular: false,
    features: [
      "Case & document review",
      "Customized document",
      "Expert matching where applicable",
      "1 revision round",
      "Standard processing"
    ]
  },
  {
    name: "Professional",
    price: "$675",
    time: "5–7 business days",
    desc: "For a more tailored engagement with deeper analysis.",
    popular: true,
    features: [
      "Everything in Essential",
      "Expanded evidence analysis",
      "Enhanced customization",
      "2 revision rounds",
      "Priority case support"
    ]
  },
  {
    name: "Priority",
    price: "$875",
    time: "2–3 business days*",
    desc: "For time-sensitive or more complex documentation.",
    popular: false,
    features: [
      "Everything in Professional",
      "Priority processing",
      "Expedited delivery where available",
      "Complexity review",
      "Dedicated coordination"
    ]
  }
];

export const pricingTabs = [
  "Expert Opinion Letters",
  "Recommendation Letters",
  "Credential Evaluations",
  "Position Evaluations",
  "RFE Support"
];

export const categories = [
  ["H-1B", "Specialty Occupation"],
  ["EB-1A", "Extraordinary Ability"],
  ["EB-1B", "Outstanding Researchers & Professors"],
  ["EB-2 NIW", "National Interest Waiver"],
  ["O-1", "Individuals of Extraordinary Ability"],
  ["L-1", "Intracompany Transferees"]
];

export const microPrices = [
  ["Recommendation Letters", "From $395"],
  ["Course-by-Course Evaluations", "From $175"],
  ["Position Evaluations", "From $455"],
  ["RFE Review", "From $150"]
];

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
