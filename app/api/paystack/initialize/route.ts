import { NextResponse } from "next/server";
import crypto from "crypto";
import { findService, priceToSubunit } from "@/lib/paystack";

export async function POST(req: Request) {
  try {
    const { serviceId, email } = await req.json();

    if (!serviceId || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const found = findService(serviceId);
    if (!found) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    const amount = priceToSubunit(found.item.price);
    if (!amount) {
      return NextResponse.json(
        { error: "This service needs a custom quote. Please contact us." },
        { status: 400 }
      );
    }

    const reference = `svc_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || new URL(req.url).origin;

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount, // subunit mein
        currency: process.env.PAYSTACK_CURRENCY || "USD",
        reference,
        callback_url: `${baseUrl}/payment/callback`,
        metadata: { serviceId, serviceName: found.item.name },
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.status) {
      return NextResponse.json(
        { error: data.message || "Paystack initialize failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({
      authorization_url: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}