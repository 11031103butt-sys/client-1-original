"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { scrollToSection } from "./scroll";

const navItems = [
  ["services", "Services"],
  ["pricing", "Pricing"],
  ["why", "Why Immigra"],
  ["about", "About"],
  ["faq", "FAQ"],
  ["contact", "Contact"]
];

export default function Header() {
  const [menu, setMenu] = useState(false);

  const go = (id: string) => {
    scrollToSection(id);
    setMenu(false);
  };

  return (
    <header className="header">
      <div className="wrap nav">
        <button
          className="logo"
          onClick={() => go("home")}
          aria-label="Immigra Evaluations home"
        >
          <span className="logoIcon">IE</span>
          <span className="logoWords">
            <b>IMMIGRA</b>
            <small>EVALUATIONS</small>
          </span>
        </button>

        <nav className={menu ? "links show" : "links"}>
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}
          <button className="navCta" onClick={() => go("contact")}>
            Start Your Case
            <ArrowRight size={16} />
          </button>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMenu(!menu)}
          aria-label="Open menu"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
