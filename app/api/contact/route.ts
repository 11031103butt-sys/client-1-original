import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendInquiryEmail } from "@/lib/mailer";

const categoryMap = {
  "H-1B": "H1B",
  "EB-1A": "EB1A",
  "EB-1B": "EB1B",
  "EB-2 NIW": "EB2_NIW",
  "O-1": "O1",
  "L-1": "L1",
  Other: "OTHER",
} as const;

const serviceMap = {
  "Expert Opinion Letter": "EXPERT_OPINION_LETTER",
  "Recommendation Letter": "RECOMMENDATION_LETTER",
  "Credential Evaluation": "CREDENTIAL_EVALUATION",
  "Position Evaluation": "POSITION_EVALUATION",
  "RFE / NOID Support": "RFE_NOID_SUPPORT",
  "Not sure yet": "NOT_SURE",
} as const;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const message = String(body.message ?? "").trim();
    const acceptedTerms = body.acceptedTerms === true;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!acceptedTerms) {
      return NextResponse.json(
        { error: "You must accept the disclaimer to continue." },
        { status: 400 }
      );
    }

    const category =
      categoryMap[body.category as keyof typeof categoryMap] ?? null;
    const service =
      serviceMap[body.service as keyof typeof serviceMap] ?? null;

    const inquiry = await prisma.contactInquiry.create({
      data: { name, email, category, service, message, acceptedTerms },
    });
    
     try {
      await sendInquiryEmail({
        name,
        email,
        category: body.category || null,
        service: body.service || null,
        message,
      });
    } catch (mailError) {
      console.error("Email send failed:", mailError);
    }

    return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}