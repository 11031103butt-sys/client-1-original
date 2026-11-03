// servicesData.ts
import { FileText, Award, ShieldCheck, Briefcase } from "lucide-react";

export const servicesData = [
  {
    id: "eb1a",
    icon: Award,
    title: "EB-1A Extraordinary Ability",
    tagline: "For individuals with extraordinary ability in sciences, arts, education, business, or athletics.",
    description: "We help showcase your sustained national or international acclaim with meticulously structured evidence and petition letters.",
    features: [
      "Petition Letter Drafting",
      "Expert Recommendation Letters",
      "Evidence Indexing & Structuring",
      "Comprehensive RFE Support"
    ],
    targetAudience: "Top Researchers, Founders, Executives, & Artists"
  },
  {
    id: "niw",
    icon: Briefcase,
    title: "EB-2 NIW (National Interest Waiver)",
    tagline: "Waiver of job offer requirement for professionals of substantial merit.",
    description: "Demonstrate that your proposed endeavor has both substantial merit and national importance to the United States.",
    features: [
      "Proposed Endeavor Framing",
      "Dhanasar Framework Alignment",
      "Custom Business/Personal Plan",
      "Citation & Impact Analysis"
    ],
    targetAudience: "Advanced Degree Professionals & Entrepreneurs"
  },
  {
    id: "o1",
    icon: ShieldCheck,
    title: "O-1 Nonimmigrant Visa",
    tagline: "Temporary visa for individuals with extraordinary achievement.",
    description: "Tailored documentation for individuals who possess extraordinary ability in the sciences, arts, education, business, or athletics.",
    features: [
      "Advisory Opinion Letters",
      "Itinerary & Contract Review",
      "Deal Sheet & Portfolio Structuring",
      "Fast-Track Documentation"
    ],
    targetAudience: "Scientists, Artists, Technical Experts"
  },
  {
    id: "custom-doc",
    icon: FileText,
    title: "Custom Documentation & Review",
    tagline: "Professional review and optimization of your self-prepared petitions.",
    description: "Have your existing petitions and evidence reviewed by experienced documentation specialists before submission.",
    features: [
      "Full Application Audit",
      "Formatting & Narrative Polish",
      "Gaps & Weakness Identification",
      "Strategic Recommendations"
    ],
    targetAudience: "Self-Petitioners & Legal Teams"
  }
];