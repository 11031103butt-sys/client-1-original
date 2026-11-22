"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, Lock, Mail, ShieldCheck } from "lucide-react";

type Props = {
  serviceId: string;
  price?: string | null;
  contactHref?: string; // "Custom Quote" wali services ke liye
};

// 👇 Button ka rang yahan se badlein (sirf ye ek jagah)
// Services page ke .btn jaisa: --navy (normal), --blue (hover)
const BTN_COLOR =
  "bg-[var(--navy,#12263a)] border-2 border-[var(--navy,#12263a)] hover:bg-[var(--blue,#1d4ed8)] hover:border-[var(--blue,#1d4ed8)]";
const OUTLINE_COLOR =
  "bg-transparent text-[var(--navy,#12263a)] border-2 border-[var(--navy,#12263a)] hover:bg-[#e4f1ed]";
const FOCUS_BORDER = "focus:border-[var(--navy,#12263a)]";
const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#f0b429]";

export default function PayButton({ serviceId, price, contactHref = "/#contact" }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validEmail = /^\S+@\S+\.\S+$/.test(email);

  async function handlePay() {
    if (loading) return;
    if (!validEmail) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceId, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      window.location.href = data.authorization_url;
    } catch (e: any) {
      setError(e.message || "Something went wrong");
      setLoading(false);
    }
  }

  const btnBase = `group inline-flex w-full items-center justify-center gap-2 rounded-lg px-[18px] py-3 text-[.98rem] font-semibold no-underline transition duration-150 ${FOCUS_RING}`;

  return (
    <div className="w-full max-w-[460px] rounded-2xl border border-gray-500/30 bg-gray-500/5 p-6 shadow-xl shadow-black/5">
      {price ? (
        <>
          <h3 className="mb-1 text-lg font-bold">Ready to get started?</h3>
          <p className="mb-5 text-sm opacity-70">
            Enter your email and we&apos;ll take you to secure checkout.
          </p>

          <div className="relative mb-3.5">
            <Mail
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50"
            />
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              autoComplete="email"
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handlePay()}
              className={`w-full rounded-xl border-[1.5px] bg-transparent py-3.5 pl-11 pr-3.5 text-base text-inherit outline-none transition focus:ring-4 focus:ring-gray-500/20 ${
                error ? "border-red-600" : `border-gray-500/40 ${FOCUS_BORDER}`
              }`}
            />
          </div>

          <button
            type="button"
            onClick={handlePay}
            disabled={loading || !email}
            className={`${btnBase} ${BTN_COLOR} text-white disabled:cursor-not-allowed disabled:opacity-60`}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Redirecting to checkout...
              </>
            ) : (
              <>
                Pay {price} &amp; Proceed
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          {error && <p className="mt-2.5 px-0.5 text-sm text-red-600">{error}</p>}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3.5 text-xs opacity-65">
            <span className="inline-flex items-center gap-1.5">
              <Lock size={14} /> Secured by Paystack
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} /> 256-bit encryption
            </span>
          </div>
        </>
      ) : (
        <>
          <h3 className="mb-1 text-lg font-bold">Need a custom quote?</h3>
          <p className="mb-5 text-sm opacity-70">
            This service is priced per case. Get in touch and we&apos;ll reply with a quote.
          </p>
          <Link href={contactHref} className={`${btnBase} ${OUTLINE_COLOR}`}>
            Request a Quote
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </>
      )}
    </div>
  );
}