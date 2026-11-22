import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { findService, priceToSubunit } from "@/lib/paystack";

async function verify(reference: string) {
  const res = await fetch(
    `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
    {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
      cache: "no-store",
    }
  );
  const json = await res.json();
  if (!res.ok || !json.status) return { ok: false as const, reason: json.message };

  const d = json.data;
  const found = findService(d.metadata?.serviceId);
  const expected = found ? priceToSubunit(found.item.price) : null;

  // status success + amount match dono check karna zaroori hai
  if (d.status !== "success") return { ok: false as const, reason: `Payment ${d.status}` };
  if (!expected || d.amount !== expected)
    return { ok: false as const, reason: "Amount mismatch" };

  return { ok: true as const, data: d };
}

export default async function PaymentCallback({
  searchParams,
}: {
  searchParams: Promise<{ reference?: string; trxref?: string }>;
}) {
  const sp = await searchParams;
  const reference = sp.reference || sp.trxref;
  const result = reference ? await verify(reference) : { ok: false as const, reason: "No reference" };

  // TODO: yahan apne database mein order "paid" mark karein (reference unique rakhein)

  return (
    <>
      <Header />
      <div className="wrap center" style={{ padding: "100px 0", textAlign: "center" }}>
        {result.ok ? (
          <>
            <h2>Payment Successful ✅</h2>
            <p>Service: {result.data.metadata?.serviceName}</p>
            <p>Reference: {result.data.reference}</p>
          </>
        ) : (
          <>
            <h2>Payment Not Completed ❌</h2>
            <p>{result.reason}</p>
          </>
        )}
        <Link href="/services" className="btn" style={{ marginTop: 20, display: "inline-block" }}>
          Back to Services
        </Link>
      </div>
      <Footer />
    </>
  );
}