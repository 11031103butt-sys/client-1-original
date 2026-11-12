"use client";

import { ArrowRight, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import { categories } from "./data";

export default function Categories() {
  const router = useRouter();

  return (
    <section className="section categories">
      <div className="wrap">
        <div className="center">
          <div className="eyebrow">IMMIGRATION CATEGORIES</div>
          <h2>
            Built for your <em>immigration goals.</em>
          </h2>
          <p>
            Professional documentation for H-1B, E-3, EB-1, EB-2 NIW, O-1 and
            L-1 matters. Select your category to see the services and prices.
          </p>
        </div>

        <div className="categoryGrid">
          {categories.map(([title, text]) => (
            <button
              type="button"
              className="categoryCard"
              key={title}
              onClick={() => router.push("/services")}
              aria-label={`${title}, ${text}. View services and pricing`}
            >
              <div className="categoryIcon">
                <Award />
              </div>
              <strong>{title}</strong>
              <span>{text}</span>
              <ArrowRight />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}