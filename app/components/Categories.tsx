"use client";

import { ArrowRight, Award } from "lucide-react";
import { categories } from "./data";
import { scrollToSection as go } from "./scroll";

export default function Categories() {
  return (
    <section className="section categories">
      <div className="wrap">
        <div className="center">
          <div className="eyebrow">IMMIGRATION CATEGORIES</div>
          <h2>
            Built for your <em>immigration goals.</em>
          </h2>
          <p>
            Professional documentation for a range of employment-based U.S.
            immigration matters.
          </p>
        </div>

        <div className="categoryGrid">
          {categories.map(([title, text]) => (
            <button
              className="categoryCard"
              key={title}
              onClick={() => go("contact")}
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
