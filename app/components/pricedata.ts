export type PricingItem = {
  name: string;
  price?: string; // khali ho to "Custom Quote" dikhega
  desc?: string; // card ki detail, khali ho to category ki desc use hogi
};

export type PricingCategory = {
  tab: string;
  tagline: string;
  desc: string;
  time?: string;
  categories?: string; // "Categories supported" line
  features: string[];
  items: PricingItem[];
};

export const pricingData: PricingCategory[] = [
  {
    tab: "Expert Opinion Letters",
    tagline: "Independent Professional Assessments for Specialized Immigration Cases",
    desc: "Our expert opinion letters provide an independent professional assessment of an applicant's qualifications, expertise, and professional standing. Each letter is tailored to the requirements of the relevant immigration category and the applicant's individual profile.",
    time: "2-5 days",
    categories:
      "H-1B Specialty Occupation, E-3, EB-1A, EB-1B, EB-1C, EB-2 NIW, O-1A, O-1B, L-1A and L-1B",
    features: [
      "Independent professional assessment",
      "Tailored to your visa category",
      "Based on your individual profile",
    ],
    items: [
      { name: "H-1B Specialty Occupation EOL, E-3", price: "$499" },
      { name: "EB-1A, EB-1B, EB-1C", price: "$599" },
      { name: "EB-2 NIW", price: "$599" },
      { name: "O-1A & O-1B", price: "$599" },
      { name: "L-1A & L-1B", price: "$599" },
    ],
  },
  {
    tab: "RFE/NOID Response",
    tagline: "Clear, Strategic Responses to Requests for Evidence",
    desc: "An RFE/NOID requires a focused response that directly addresses the issues raised by USCIS. We prepare professionally structured responses that organize the available evidence and address the specific concerns identified in the RFE.",
    time: "3-5 days",
    categories: "EB-1A, EB-1B, EB-1C, EB-2 NIW, O-1A, O-1B, L-1A and L-1B",
    features: [
      "Directly addresses USCIS concerns",
      "Well-organized evidence",
      "Professionally structured response",
    ],
    items: [
      { name: "RFE Response (EB-1A, EB-1B, EB-2 NIW)", price: "$899" },
      { name: "RFE Response (EB-1C or L-1A or L-1B)", price: "$799" },
      { name: "RFE Response (O-1A & O-1B)", price: "$899" },
    ],
  },
  {
    tab: "Recommendation Letters",
    tagline: "Persuasive Professional Endorsements",
    desc: "We prepare tailored recommendation letters that present an applicant's expertise, accomplishments, professional impact, and qualifications through the perspective of relevant recommenders.",
    time: "2-3 days",
    categories: "EB-1A, EB-1B, O-1A, O-1B and EB-2 NIW",
    features: [
      "Tailored to each recommender",
      "Highlights achievements and impact",
      "Professionally written",
    ],
    items: [
      { name: "EB-1A / EB-1B", price: "$599" },
      { name: "O-1A / O-1B", price: "$599" },
      { name: "EB-2 NIW", price: "$599" },
    ],
  },
  {
    tab: "Custom Quote Services",
    tagline: "Personalized Quote",
    desc: "",
    features: [],
    items: [
      {
        name: "Position Evaluation",
        desc: "Our position evaluation service assesses a proposed position and provides a professionally prepared analysis relevant to the intended immigration category, helping clearly establish the nature and requirements of the role.",
      },
      {
        name: "Credential Evaluation",
        desc: "A professional evaluation of your credentials. Please contact us for a personalized quote by filling in the form.",
      },
      {
        name: "Professional & Business Plans",
        desc: "We prepare structured professional and business plans that communicate your objectives, proposed activities, qualifications, and strategy in a clear and professional format suitable for immigration submissions.",
      },
      {
        name: "Petition Documentation Verification & Quality Review",
        desc: "A comprehensive review of your immigration petition and supporting documents to identify inconsistencies, missing evidence, unsupported claims, factual discrepancies and documentation gaps. We assess the accuracy, consistency, organization and alignment of your claims with the evidence provided, helping ensure your petition is clear, coherent, well-supported and professionally presented before submission.",
      },
    ],
  },
];

export const pricingTabs = pricingData.map((c) => c.tab);

// مشترکہ slugify فنکشن جو تمام لنکس کو 100% درست میچ کرے گا
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");