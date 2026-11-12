"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { scrollToSection } from "./scroll";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { id: "services", label: "Services", type: "link", href: "/services" },
  { id: "pricing", label: "Pricing", type: "scroll" },
  { id: "why-immigra", label: "Why Immigra", type: "link", href: "/why-immigra" },
  { id: "about", label: "About", type: "link", href: "/about" },
  { id: "faq", label: "FAQ", type: "link", href: "/faq" },
  { id: "contact", label: "Contact", type: "scroll" }
];

export default function Header() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (item: { id: string; type: string; href?: string }) => {
    setMenu(false);

    if (item.type === "link" && item.href) {
      router.push(item.href);
    } else {
      // Agar hum home page ("/") par nahi hain, toh pehle home par jayein phir section par scroll karein
      if (pathname !== "/") {
        router.push(`/#${item.id}`);
      } else {
        scrollToSection(item.id);
      }
    }
  };

  return (
    <header className="header">
      <div className="wrap nav">
        {/* Logo */}
        <button
          className="logo"
          onClick={() => {
            setMenu(false);
            if (pathname !== "/") {
              router.push("/");
            } else {
              scrollToSection("home");
            }
          }}
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
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item)}>
              {item.label}
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