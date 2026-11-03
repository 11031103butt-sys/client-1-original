"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { scrollToSection } from "./scroll";
import Link from "next/link";

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
        {/* Logo */}
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

        {/* Navigation Links */}
        <nav className={menu ? "links show" : "links"}>
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>
              {label}
            </button>
          ))}

          {/* /services Page Link Button */}
          <Link
            href="/services"
            className="navCta"
            onClick={() => setMenu(false)}
          >
            Select a service
            <ArrowRight size={16} />
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}